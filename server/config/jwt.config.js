const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.JWT_SECRET;
const User = require('../models/User');

module.exports.secret = secret;


/*
Inside the login controller we set up our token we assign it to a variable and pass it a key, the "payload"
and options. we sign it with our JWT key and it hashes and returns it to our token variable.
we then use the authenticate function to verify wether the JWT is valid the verify method takes in the 
token accessed from the request stored in cookies the secret key to allow it to check if it is valid and an annonomas 
function that returns an error if the verified status comes back false and moves to the next function if true
we then call this in our routes.
*/

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, secret, async (err, payload) => {
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            req.user = await User.findById(payload.id); //id needs to be in payload
            console.log(payload);
            next();
        }
    });
};

