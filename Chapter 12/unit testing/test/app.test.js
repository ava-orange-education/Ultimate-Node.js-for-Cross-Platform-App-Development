// test/server.js

var expect = require("chai").expect;
var request = require("request");

describe("Color Converter API", function () {

    describe("Convert RGB to Hex", function () {

        var url = "http://localhost:5100/convert/rgb-hex?red=255&green=255&blue=255";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in hex", function (done) {
            request(url, function (error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });

    });

    describe("Convert Hex to RGB", function () {
        var url = "http://localhost:5100/convert/hex-rgb?hex=00ff00";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in RGB", function (done) {
            request(url, function (error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });
});