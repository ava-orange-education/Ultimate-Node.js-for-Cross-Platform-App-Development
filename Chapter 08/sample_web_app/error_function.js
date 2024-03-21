const express = require('express')
const fsPromises = require('fs').promises

const app = express()
const port = 3000

app.get('/page1', (req, res, next) => {
  fsPromises.readFile('./page1.txt') // arbitrary file
    .then(data => res.send(data))
    .catch(err => next(err)) // passing error to custom middleware
})

app.get('/page2', (req, res, next) => {
  fsPromises.readFile('./page2.txt')
    .then(data => res.send(data))
    .catch(err => {
        err.type = 'redirect' // custom prop to specify handling behaviour
        next(err)
    })
})

app.get('/error', (req, res) => {
  res.send("Custom error landing page.")
})

app.use((error, req, res, next) => {
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  console.error('Error: ', error)
 
  if (error.type == 'redirect')
      res.redirect('/error')

   else if (error.type == 'time-out') // arbitrary condition check
      res.status(408).send(error)
  else
      res.status(500).send(error)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})