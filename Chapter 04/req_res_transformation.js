const express = require('express');
const bodyParser = require('body-parser');
var mung = require('express-mung');
var xml2js = require('xml2js');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({
    type: () => true
}));

// ... everything we have above goes here ...
//Request Data Transformation
app.use((req, res, next) => {
    if (/\/xml$/.test(req.headers['content-type'])) {
        xml2js.parseString(req.body.toString(), function (err, result) {
            req.body = result;
        });
    }
    next();
});

//Response Data Transformation
app.use(mung.json((body, req, res) => {
    console.log("xml", /\xml$/.test(req.url));
    if (/\xml$/.test(req.url)) {
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(body);
        return xml;
    }
}));

app.use(mung.headers((req, res) => {
    if (/\xml$/.test(req.url)) {
        res.set('Content-Type', 'application/xml');
    }
}));

app.get('/api/sample', function (req, res) {
    res.json({
        errorCode: 0,
        message: 'Hola! I\'m API one'
    });
});

app.post('/api/sample', function (req, res) {
    console.log(req.body);
    res.json(req.body);
});

app.post('/api/sample/xml', function (req, res) {
    //console.log(req.body);
    res.json(req.body);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server is listening at http://%s:%s", host, port)
});