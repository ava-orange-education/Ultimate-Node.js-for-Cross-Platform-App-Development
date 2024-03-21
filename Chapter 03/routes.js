const express = require('express')
const app = express()

// return message "hello world" when request is made to the root of application
app.get('/', (req, res) => {
    res.send('hello world')
})

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => {
    res.send('root of application')
})


app.get('/about', (req, res) => {
    res.send('about')
})

//Route path: /customers/:customerId/orders/:orderId
//Request URL: http://localhost:3000/customers/4534/orders/342343

/*
req.params: { 
       "customerId": "4534", 
       "orderId": "342343" 
}

*/

app.get('/customers/:customerId/orders/:orderId', (req, res) => {
    res.send(req.params)
})

//output
/*req.params: { 
    "start": "03052023", 
    "to": "06052023" 
}
*/


app.get('/user/profile', (req, res) => {
    res.send('user profile')
})

app.get('/fileupload', (req, res, next) => {
    console.log('Once file upload done, response sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from B!')
})


const cbFunc0 = function (req, res, next) {
    console.log('This is call back func 1')
    next()
}

const cbFunc1 = function (req, res, next) {
    console.log('This is call back func 1')
    next()
}

app.get('/example/c', [cbFunc0, cbFunc0])


app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from D!')
})

//  Following example can help to understand how handlers are defined using chained.
app.route('/users/')
    .get((req, res) => {
        res.send('Get list of users')
    })
    .post((req, res) => {
        res.send('Add a user')
    })
    .put((req, res) => {
        res.send('Update the user')
    })
