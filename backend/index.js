// // const express=require("express")
// // // const mongoose=require("mongoose")
// // const cors=require("cors")
// // const passport=require("passport")
// // const session=require("express-session")
// // // const cookieParser=require("cookie-parser")
// // const app=express()
// // require("./auth.js")
// // const path=require("path")
// // app.use(express.static(path.join(__dirname, 'frontend')))

// // app.get("/", (req, res) => {
// //     res.sendFile('index.html', { root: path.join(__dirname, 'frontend') });
// // })


// // app.use(express.json())

// // app.use(cors())

// // function isLoggedin(req,res,next){
// //     req.user? next:res.sendStatus(401)
// // }


// // app.use(session({
// //     secret: 'keyboard cat',
// //     resave: false,
// //     saveUninitialized: true,
// //     cookie: { secure: false }
// //   }))

// // app.use(passport.initialize())
// // app.use(passport.session())

// // app.get('/auth/google',
// //   passport.authenticate('google', { scope:
// //       [ 'email', 'profile' ] }
// // ));

// // app.get( '/auth/google/callback',
// //     passport.authenticate( 'google', {
// //         successRedirect: '/auth/protected',
// //         failureRedirect: '/auth/google/failure'
// // }));

// // app.get("/auth/google/failure", (req, res) => {
// //     res.send("Something= went wrong");
// // });


// // app.get("/auth/protected",isLoggedin, (req, res) => {
// //     let user=req.user
// //     res.send(user)
// //     let name=req.user.displayName
// //     res.send(`Hello user ${name}` );
// // });


// // app.use("/auth/logout",(req,res)=>{
// //     req.session.destroy()
// //     res.send("logged out")
// // })





// // app.listen(5500,()=>{
// //     console.log("server started")
// // })


//  yahan wala thik tha

// const express = require("express");
// const cors = require("cors");
// const passport = require("passport");
// const session = require("express-session");
// const path = require("path");

// require("dotenv").config();
// require("./auth.js");

// const app = express();

// app.use(express.static(path.join(__dirname, 'frontend')));

// app.use(express.json());
// app.use(cors());

// function isLoggedin(req, res, next) {
//     req.user ? next() : res.sendStatus(401);
// }

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/auth/protected',
//         failureRedirect: '/auth/google/failure'
//     })
// );

// app.get("/auth/google/failure", (req, res) => {
//     res.send("Something went wrong");
// });

// // app.get("/auth/protected", isLoggedin, (req, res) => {
// //     // let user = req.user;
// //     // res.send(user);
// //     let name = req.user.displayName;
// //     res.send(`Hello user ${name}`);
// // });


// // app.get("/auth/protected", isLoggedin, (req, res) => {
// //     let user = req.user;
// //     let name = req.user.displayName;
// //     res.send(`User: ${user}, Name: ${name}`); // Combine data into a single response
// // });

// app.get("/auth/protected", isLoggedin, (req, res) => {
//     let user = req.user;

//     // Convert the user object to a JSON string
//     let userDetails = JSON.stringify(user, null, 2);

//     res.send(userDetails); // Send the user details JSON string as the response
// });


// app.use("/auth/logout", (req, res) => {
//     req.session.destroy();
//     res.send("logged out");
// });

// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root: path.join(__dirname, 'frontend') });
// });

// app.listen(5500, () => {
//     console.log("server started");
// });



// const express = require("express");
// const cors = require("cors");
// const passport = require("passport");
// const session = require("express-session");
// const path = require("path");
// const { google } = require('googleapis');

// require("dotenv").config();
// require("./auth.js");

// const app = express();

// app.use(express.static(path.join(__dirname, 'frontend')));
// app.use(express.json());
// app.use(cors());

// function isLoggedin(req, res, next) {
//     req.user ? next() : res.sendStatus(401);
// }

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Initialize OAuth client
// const oauth2Client = new google.auth.OAuth2(
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     'http://localhost:5500/auth/google/callback' // Redirect URL
// );

// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/auth/protected',
//         failureRedirect: '/auth/google/failure'
//     })
// );

// app.get("/auth/google/failure", (req, res) => {
//     res.send("Something went wrong");
// });

// // Example of using Gmail API
// app.get("/auth/protected", isLoggedin, async (req, res) => {
//     try {
//         // Get access token from the user's session
//         const accessToken = req.user.tokens.access_token;

//         // Set access token for OAuth client
//         oauth2Client.setCredentials({ access_token: accessToken });

//         // Example: Fetch user's Gmail profile
//         const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
//         const profile = await gmail.users.getProfile({ userId: 'me' });

//         res.send(profile.data);
//     } catch (error) {
//         console.error('Error fetching Gmail profile:', error);
//         res.status(500).send('Error fetching Gmail profile');
//     }
// });

// app.use("/auth/logout", (req, res) => {
//     req.session.destroy();
//     res.send("Logged out");
// });

// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root: path.join(__dirname, 'frontend') });
// });

// app.listen(5500, () => {
//     console.log("Server started");
// });


const express = require("express");
const cors = require("cors");
const passport = require("./auth"); // Import Passport configuration
const session = require("express-session");
const path = require("path");
const { google } = require('googleapis');

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use(cors());

function isLoggedin(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile','https://www.googleapis.com/auth/gmail.readonly','https://www.googleapis.com/auth/gmail.compose'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
    })
);

app.get("/auth/google/failure", (req, res) => {
    res.send("Something went wrong");
});

// Example of using Gmail API
app.get("/auth/protected", isLoggedin, async (req, res) => {
    try {
        // Get access token from the user's session
        const accessToken = req.user.tokens.access_token;

        // Set access token for OAuth client
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: accessToken });

        // Example: Fetch user's Gmail profile
        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
        const profile = await gmail.users.getProfile({ userId: 'me' });

        res.send(profile.data);
    } catch (error) {
        console.error('Error fetching Gmail profile:', error);
        res.status(500).send('Error fetching Gmail profile');
    }
});

app.use("/auth/logout", (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});

app.get("*", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'frontend') });
});

app.listen(5500, () => {
    console.log("Server started");
});
