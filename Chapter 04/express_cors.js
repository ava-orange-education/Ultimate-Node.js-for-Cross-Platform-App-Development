const express = require('express');
const app = express();

const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000/', 'https://www.google.com/']
}));

app.use(cors({
    origin: 'http://localhost:3000/'
}));

const whitelist = ['http://developer1.com', 'http://developer2.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error())
        }
    }
}

app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.get('/users', (req, res) => {
    res.send(ingredients);
});

// app.get('/users', cors(), (req, res, next) => {
//     res.send(ingredients);
// });

app.listen(5001,function () {    
    
    console.log("Server is listening at http://localhost:5001");
 });

//fetch("http://localhost:6069/ingredients").then(req => req.text()).then(console.log);