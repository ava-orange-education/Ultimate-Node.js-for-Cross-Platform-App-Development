const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello, My server using Express');
});

const server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log(`Server is listening at http://${host}:${port}`)
});