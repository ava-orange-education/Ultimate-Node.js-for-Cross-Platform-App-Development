const express = require('express');
const bodyParser = require('body-parser');
const validator = require('./validator');
const {
    validationResult
} = require('express-validator')

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/register', validator.registrationValidation, (req, res, next) => {
    // your registration code
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        // in case request params meet the validation criteria
        console.log('User registration is done');
        res.send("User registration successfull");
    }

    res.status(400).json({
        errors: errors.array()
    })
});

app.listen(3000, () => console.log('Server is running on port 3000'));