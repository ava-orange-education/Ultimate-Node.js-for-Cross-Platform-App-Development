
// getUserFromToken would be based on your authentication strategy

const getUserFromToken = require("../getUserFromToken");

module.exports = function setCurrentUser(req, res, next) {

    // grab authentication token from req header

    const token = req.header("authorization");

    // look up the user based on the token

    const user = getUserFromToken(token).then(user => {

        // append the user object the the request object

        req.user = user;

        // call next middleware in the stack

        next();

    });

};

const express = require("express");

const setCurrentUser = require("./middleware/setCurrentUser.js");

const isLoggedIn = require("./middleware/isLoggedIn.js");

const app = express();

app.use(setCurrentUser);

app.get("/users", isLoggedIn, function(req, res) {

  // get users...

});
