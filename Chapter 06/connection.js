let mongoose = require('mongoose');

// Replace with your DB server
const server = '127.0.0.1:27017';

// Replace with your DB name
const database = 'employeedb';

const Connection = () => {

  mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.error('Database connection error')
    })
}

module.exports = Connection;