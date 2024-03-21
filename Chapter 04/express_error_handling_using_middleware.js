const express = require('express');
const axios = require("axios");
const app = express();

const errorHandler = (error, request, response, next) => {   
    console.log(`error ${error.message}`) 
    const status = error.status || 400
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message);
}

app.get('/users', async (request, response) => {
    try {
        const apiResponse = await axios.get("http://localhost:3001/users");

        const jsonResponse = apiResponse.data;

        response.send(jsonResponse);
    } catch (error) {
        next(error); // calling next error handling middleware
    }
})
app.use(errorHandler);