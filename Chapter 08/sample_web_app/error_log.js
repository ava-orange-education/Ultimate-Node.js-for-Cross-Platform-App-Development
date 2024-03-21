const express = require("express");
const app = express();

app.get("/", (req, res, next) => {  
    console.log("This is landing page");
    res.status(200).send("My landing page..");
});

app.get("/event", (req, res, next) => {
    try {
        throw new Error("Not User!");
    } catch (error) {
        console.error("Events Error: Unauthenticated user");
        res.status(500).send("Error!");
    }
});

app.listen(3000, () => {
    console.log("Server Listening On Port 3000");
});