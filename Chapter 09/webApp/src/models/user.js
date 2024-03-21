  let mongoose = require('mongoose');
  const {
    Schema
  } = mongoose;

  const userSchema = new Schema({
    // String is shorthand for {type: String}
    username: String,
    email: String,
    password: String
  });

  // Creating a Model
  let user = mongoose.model('User', userSchema);

  // Exporting the created module
  module.exports = user;