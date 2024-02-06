let mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    // String is shorthand for {type: String}
    name:  String,
    dob: { type: Date, default: Date.now },
    address:   String,
    phone: String
});

// Creating a Model
let Employee = mongoose.model('Blog', employeeSchema);

// Exporting the created module
module.exports = Employee;