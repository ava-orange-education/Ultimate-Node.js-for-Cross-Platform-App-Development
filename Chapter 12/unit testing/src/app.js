var express = require("express");
var app = express();
var converter = require("./color_converter");

app.get("/", function (req, res) {   
    res.send("Hello world");
});

app.get("/convert/rgb-hex", function (req, res) {

    var red = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue = parseInt(req.query.blue, 10);
    var hex = converter.convertRgbToHex(red, green, blue);
    res.send(hex);

});

app.get("/convert/hex-rgb", function (req, res) {

    var hex = req.query.hex;
    var rgb = converter.convertHexToRgb(hex);
    res.send(JSON.stringify(rgb));

});

app.listen(5100, () => {
    try {
        console.log(`Server listening at http://localhost:5100`)
    } catch (error) {

    }
})