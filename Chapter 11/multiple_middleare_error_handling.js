const express = require('express')
const promises = require('fs').promises

const app = express()

app.get('/page1', (req, res, next) => {
    promises.readFile('./page1.txt')
        .then(data => res.send(data))
        .catch(err => next(err))
})

app.get('/page1', (req, res, next) => {
    promises.readFile('./page1.txt')
        .then(data => res.send(data))
        .catch(err => {
            err.type = 'redirect'
            next(err)
        })
})

app.get('/error', (req, res) => {
    res.send("Custom error landing page.")
})

function errorLogger(error, req, res, next) { // for logging errors
    console.error(error)
    next(error)
}

function errorHandler(error, req, res, next) { // responding to client
    if (error.type == 'redirect') {
        res.redirect('/error')
    } else if (error.type == 'time-out') {
        res.status(408).send(error)
    } else {
        next(error)
    }
}

app.use(errorLogger)
app.use(errorHandler)

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:${3000}`)
})