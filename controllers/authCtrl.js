const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');


// /api/v1/auth/login

// GET Root Route
// -------------------
// router.get('/', (req, res) => {
//     // Only allow logged-in users to view this route
//     if (!req.session.loggedIn) {
//         return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
//     }
//     res.json({currentUser: req.session.currentUser});  //Home
// });

// // GET Profile Route
// router.get('/profile/:id', (req, res) => {
//     // Only allow logged-in users to view this route
//     if (!req.session.loggedIn) {
//         return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
//     }
//     res.json({currentUser: req.session.currentUser}); // profile
// });
// -----------------------


// GET '/profile'
router.get('/profile', (req, res) => {
    // Check if user is logged in
if (!req.session.loggedIn) {
    return res.json({loggedIn: false})
}
// Get the username
const { username } = req.session.currentUser;
// Look up their profile
db.UserData.findOne({username})
    .catch(err => res.json({username, errors: [{message: genericError}]}))
    .then(foundUser => {
    // If no user found...
    if (!foundUser) return res.json({username, errors: [{message: 'Unknown username'}]});
    // otherwise return the user info, minus the password hash
    foundUser.password = '';
    return res.json({loggedIn: true, foundUser});
    });
});
// // Todo React frontend will open login modal if it gets loggedIn === false response

// PUT '/profile'
// // For updating the profile
// // Checks session token to get the username
// // The username in the session token also acts as validation they are allowed to edit

router.put('/profile', (req, res) => {
const genericError = 'Please try again. Error updating profile';
if (!req.session.loggedIn) {
    return res.json({loggedIn: false})
}
const { username } = req.session.currentUser;
// const updateUser = {
//   email: req.body.email,
//   username: req.body.username,
//   name: req.body.name,
//   currentCity: req.body.currentCity,
// }

db.UserData.findOneAndUpdate({username}, req.body, {new: true} )
    .catch(err => res.json({username, errors: [{message: genericError}]}))
    .then(updatedUser => {
    // If no user found...
    if (!updatedUser) return res.json({username, errors: [{message: 'Unknown username'}]});

    // If username changed then change username in their session token
    if (updatedUser.username !== username){
        req.session.currentUser = {
        username: updatedUser.username,
        };
    }
    // otherwise return success
    return res.json({success: true});
    });
});










// -------------------------------------------------

  // GET New User Route
router.get('/signup', (req, res) => {
    res.json({staus: 200, message: "Success Signup "})
});


// POST Create User Route
router.post('/signup', (req, res) => {
    const errors = [];

    console.log(req.body)
    
    // Validate Form Data
    if (!req.body.username) {
        errors.push({message: 'Please enter your username'});
    }

    if (!req.body.currentCity) {
        errors.push({message: 'Please enter your currentCity'});
    }

    if (!req.body.email) {
        errors.push({message: 'Please enter your email'});
    }

    if (!req.body.password) {
    errors.push({message: 'Please enter your password'});
    }

    if (req.body.password !== req.body.password2) {
    errors.push({message: 'Your passwords do not match'});
    }

    // Query database to see if email account already exists.
    // If return res with errors
    // Find one User by email
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});
    
        // If we didn't find a user, re-json the login page with error message
        if (foundUser) {
            errors.push({message: 'Your passwords do not match'});
        }
    });

    // If there are any validation errors, Re-json signup page with error messages
    if (errors.length) {
        return res.json({user: req.body, errors: errors});
    }

    // Generate salt for additional password hash complexity
    bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});

    // Hash user password from signup form
    bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});

        // Create an object to hold the new user information (with hashed password, not original password)
        const userData = {
        username: req.body.username,
        currentCity: req.body.currentCity,
        email: req.body.email,
        password: hash,
        }

        // Create a new User record in MongoDB from the newUser object above
        db.User.create(userData, (err, newUser) => {
        if (err) return res.json({ errors: [err]});
        // If new user was created successfully, redirect user to login page
        // We could also create the session here (just like the login route), then redirect to the dashboard instead
        // res.redirect('/login');
        res.json({status: 200, message: "Success", newUser})
        });
    });
    });
});

// GET Login Route
router.get('/login', (req, res) => {
    res.json({staus: 200,message: "Success login"})
});

// POST Login Route
router.post('/login', (req, res) => {
    // First make sure the user didn't submit an empty form
    if (!req.body.email || !req.body.password) {
    return res.json({user: req.body, errors: [{message: 'Please enter your email and password'}]});
    }

    // Find one User by email
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});

    // If we didn't find a user, re-json the login page with error message
    if (!foundUser) {
        return res.json({user: req.body, errors: [{message: 'email or password is incorrect'}]});
    }

    // If this line of code runs, it means we found the user
    // Compare the password submitted by user login form with password from found user
    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
        if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});

        // If the passwords match, create a new session with loggedIn and currentUser properties (or any properties you want except the user password)
        if (isMatch) {
        req.session.loggedIn = true;
        req.session.currentUser = {
            id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email,
        }
        // Redirect user to the dashboard
        res.json({message: 'Logged in successfully', session: req.session});
        // return res.json({staus: 200, message: "Success"})
        } else {
        // If the passwords do not match, re-json the login page with error message
        if(err) return res.json({user: req.body, errors: [{message: 'email or password is incorrect'}]});
        }
    });
    });
});

// GET Logout Route
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
    if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});
    res.status(200).clearCookie('connect.sid',
    {
        path:'/',
    })
    res.json({staus: 200, message: "Success logout"})
    })
});


// router.post('/logout', (req, res) => {
//     req.session.destroy(err => {
//     if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong. Please try again'}]});
//     res.status(200).clearCookie('connect.sid',
//     {
//         path:'/',
//     })
//     res.json({staus: 200, message: "Success logout"})
//     })
// });



// POST '/logout'
router.post('/logout', (req, res) => {
    const genericError = 'Something went wrong. Please try again';
    // Delete the user's session
    req.session.destroy(err => {
    if (err) return res.json({error: err, message: genericError});
});
    res.status(200).clearCookie('connect.sid', {
    path: '/',
}).json({loggedOut: true});
});

module.exports = router;