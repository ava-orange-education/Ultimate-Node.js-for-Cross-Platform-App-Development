// index.js
const express = require('express');
const routes = require('./routes');
const { errorLogHandler, errorHandler, invalidPathHandler } = require('./middleware')

const app = express();
const port = 5000;

app.use(routes);

// middleware
app.use(errorLogHandler)
app.use(errorHandler)
app.use(invalidPathHandler)

app.listen(port, () => {
  try {
    console.log(`Server listening at http://localhost:${port11}`)
  } catch (error) {
    
  } 
})