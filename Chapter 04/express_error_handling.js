const express = require('express')
const app = express()

// handle post request for path /employees
app.post('/employees', (request, response) => {
  const name = request.body.name

  // Check for error condition
  if (name == null) {
    // Error handling logic: log the error
    console.log("input error")

    // Error handling logic: return error response
    response
      .status(400)
      .json({ message: "Mandatory field: name is missing. " })
  } else {
    // continue with normal processing             
    const empCreationResponse = { result: "success" }

    // return success response
    response.json(empCreationResponse)
  }
})

app.get('/employees', async (request, response) => {
  try{
    const apiResponse = await axios.get("http://localhost:3001/employees");

    const jsonResponse = apiResponse.data;
    console.log("response " + jsonResponse);
    
    response.send(jsonResponse);
  } catch(error) {  

    // return error response
    response
        .status(500)
        .json({ message: "Error in invocation of API: /employees" });
  }
})

//Express' built-in default error handler

const express = require('express');

const app = express();

// handle get request for path /userswitherror
app.get('/userswitherror', (request, response) => {
  
  // throw an error with status code of 400
  let error = new Error(`processing error in request at ${request.url}`)
  error.statusCode = 400
  throw error

})

const port = 3000;
app.listen(port, 
     () => console.log(`Server listening on port ${port}.`));