
const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('console');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use({
    urlencoded: false
})

app.use(bodyParser.json())

function authUser(req, res, next) {
    if(isUserVerified){
        next();
    }else{
        throw error("User not Authorized");
    }
}

app.post('/employees', authUser, (req, res) => {
    var list = [{
        name: 'wrewr',
        salary: '3423'
    }];
    res.json({
        "status": true,
        "data": list
    });
});

app.listen(3000, (req, res) => {
    console.log('server running on port')
})