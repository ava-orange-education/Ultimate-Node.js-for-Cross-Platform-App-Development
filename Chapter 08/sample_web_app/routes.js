// routes.js
const express = require('express');
const router = express.Router();
const {
    TodoIdNullError,
    TodoNotFoundError
} =  require("./errors");

// Home page
router.get('/', (req, res) => {
    res.send("Home Page.....");
})

// Get the list of todos
router.get('/todos', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => {
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify(todos, null, 4));
        })
        .catch(err => next(err))
})

// Get the list of todos
router.get('/todos/:id', (req, res, next) => {
    console.log(req.params.id);
    
    if(!req.params.id){
        throw new TodoIdNullError();
    }

    fetch('https://jsonplaceholder.typicode.com/todos/' + req.params.id)
        .then(res => res.json())
        .then(todos => {
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify(todos, null, 4));
        })
        .catch(err => {
            throw new TodoNotFoundError();
            next(err);
        })
})

router.get('/error', (req, res) => {
    res.send("The URL you are trying to reach does not exist.");
})

module.exports = router;