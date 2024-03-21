var mongoose = require('mongoose');

// schema defination for Employee entity
var empSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
    dob: Date
});

//creating Employee model 
var employee = new mongoose.model('Employee', empSchema);

module.exports = employee;