var express = require('express')

var app = express();

var requestTime = function (req, res, next) {
    req.requestTime = new Date().toLocaleString()
    next()
}

app.get('/', requestTime, (req, res) => {

    var responseText = 'Hello World!<br>'
    responseText += 'Requested at: ' + req.requestTime
    res.send(responseText)

})

app.get('/someother', (req, res) => {
    res.send("Hello World")
})

app.listen(3000)