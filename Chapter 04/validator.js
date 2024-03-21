const {
    check
} = require('express-validator');


const registrationValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
    check('password', 'Password must be 8 or more alphanumberic characters').isLength({
        min: 6
    })
];


exports.registrationValidation = registrationValidation