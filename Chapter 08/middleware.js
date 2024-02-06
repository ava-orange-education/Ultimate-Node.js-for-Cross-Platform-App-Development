var express = require('express')

var app = express()

var requestTime = function (req, res, next) {

    req.requestTime = Date.now()

    next()

}

app.use(requestTime)

app.get('/', function (req, res) {

    var responseText = 'Hello World!<br>'

    responseText += '<small>Requested at: ' + req.requestTime + '</small>'

    res.send(responseText)

})


/**
 * @param {Object} request - Express request object (commonly named `req`)
 * @param {Object} response - Express response object (commonly named `res`)
 * @param {Function} next - Express `next()` function
 */
function middlewareFunction(request, response, next) {
	// execute something
}

app.listen(3000)