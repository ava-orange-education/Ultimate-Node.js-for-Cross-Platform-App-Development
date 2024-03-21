const express = require('express')
const app = express()

// middleawre used for authenticating request
function authMiddleware(req, res, next) {
  console.log('Authentication of request will happen');
  next();
}

// middleare used for logging application information
function logMiddleware(req, res, next) {
  console.log('Request logging will take care here');
  next();
}

// We are creating array of middleware which will be exuected before request processing
const logStuff = [authMiddleware, logMiddleware]

// Get request using logStuff array of middlewares
app.get('/order/:id', logStuff, (req, res, next) => {
  res.send('Order detail...');
})

const server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Server is listening at http://${host}:${port}`)
});