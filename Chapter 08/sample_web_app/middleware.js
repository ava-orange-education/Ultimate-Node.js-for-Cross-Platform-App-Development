// middleware_error_handler.js
const errorLogHandler = (err, req, res, next) => {
  console.error('\x1b[31m', err) 
  next(err) 
}

const errorHandler = (err, req, res, next) => {
  res.header("Content-Type", 'application/json')
  res.status(err.statusCode).send(JSON.stringify(err, null, 4))
}
const invalidPathHandler = (req, res, next) => {
  res.redirect('/error')
}

module.exports = {
  errorLogHandler,
  errorHandler,
  invalidPathHandler
}