const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;




// CONTROLLERS
const usersCtrl = require('./controllers/usersCtrl');
const authCtrl = require('./controllers/authCtrl');


// ----------------------------------- MIDDLEWARE ----------------------------------- //

// CORS
// Express CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express Session Middleware
app.use(session({
    // name: 'sid',
    secret: process.env.SESSION_SECRET || 'SSShhhhhh, this is a secret...',
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 1000 * 60 * 5
    // }

}));


// ----------------------------------- HTML ROUTES ----------------------------------- //

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Wayfarer App</h1>');
});

// ----------------------------------- API ROUTES ----------------------------------- //

// Users 
app.use('/api/v1/users', usersCtrl);

// Auth
app.use('/api/v1/auth', authCtrl);

// ----------------------------------- START SERVER ----------------------------------- //

app.listen(PORT, () => console.log(`napping on a cruiseship in room ${PORT}`));