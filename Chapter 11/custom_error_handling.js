const express = require('express')

const app = express()

app.get('/page1', (req, res) => {
    try {
        // do some operation like reading file or database call
        return res.send("Page one returned")
    } catch (error) {
        console.error(err)
        res.status('500').send(err) // return error to user
    }
})

app.get('/page2', (req, res) => {
    try {
        // do some operation like reading file or api call
        return res.send("Page two data")
    } catch (error) {
        console.error(err)
        res.redirect('/error') // redirect to error page
    }
})

app.get('/error', (req, res) => {
    res.send("Error page.")
})

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
})

app.use((error, require, res, next) => {
    console.log("Log error",error) 
    next() // use to call next set of middleware
})