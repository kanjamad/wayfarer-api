const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;




// CONTROLLERS
// const usersCtrl = require('./controllers/usersCtrl');
// const authCtrl = require('./controllers/authCtrl');
// const postsCtrl = require('./controllers/postsCtrl');
// const citiesCtrl = require('./controllers/citiesCtrl');

const ctrl = require('./controllers')


// ----------------------------------- MIDDLEWARE ----------------------------------- //

// CORS - Cross Origin Resource Sharing
// Express CORS Middleware
// npm i cors
    // then don't for got const cors = require('cors'); above
// Thank you Travis
const corsOptions = {
    origin: ['http://localhost:3000', ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true, // This allows the session cookie to be sent back and forth
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
  // // Enable CORS "Pre-Flight" for all routes
  // app.options('*', cors())



// ----- old ----------
// CORS
// Express CORS Middleware
// ------
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express Session Middleware
app.use(session({
    // name: 'sid',
    secret: process.env.SESSION_SECRET || 'SSShhhhhh, this is a secret...',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 5,
        httpOnly:false,
        secure: false,
        // secure: true,
        path: '/'
    }

}));


// ----------------------------------- HTML ROUTES ----------------------------------- //

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Wayfarer App</h1>');
});

// ----------------------------------- API ROUTES ----------------------------------- //

// Users GET/PUT/DELETE && /:id GET/PUT/DELETE
app.use('/api/v1/users', ctrl.user);
// Posts
app.use('/api/v1/posts', ctrl.post);
// Cities
app.use('/api/v1/cities', ctrl.city);

// Auth
app.use('/api/v1/auth', ctrl.auth);

// ----------------------------------- START SERVER ----------------------------------- //

app.listen(PORT, () => console.log(`napping on a cruiseship in room ${PORT}`));