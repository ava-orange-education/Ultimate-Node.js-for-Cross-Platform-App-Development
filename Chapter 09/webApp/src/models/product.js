let mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const productSchema = new Schema({
  // String is shorthand for {type: String}
  name: String,
  price: String,
  isDeleted: Boolean
});

// Creating a Model
let product = mongoose.model('Product', productSchema);

// Exporting the created module
module.exports = product;