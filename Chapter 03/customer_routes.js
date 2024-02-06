const express = require('express');
const router = express.Router();


// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the customer home page route
router.get('/customer', (req, res) => {
    res.send('Customer home page')
})

// define the customer account page route
router.get('/customer/account', (req, res) => {
    res.send('Customer account detail page')
})

module.exports = router

const customerRoutes = require('./customer_routes');

/*
 More application code
*/

app.use('/customers', customerRoutes);


app.all('/user/profile', (req, res, next) => {
    console.log('Accessing the user profile section ...require authentication')
    next() // pass control to the next handler
})
