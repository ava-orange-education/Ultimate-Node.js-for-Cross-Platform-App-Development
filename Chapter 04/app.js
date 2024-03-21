/* .... */
var swaggerUi = require('swagger-ui-express');
var YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

/* .... */

var express = require('express');
var app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
   res.send('Hello, My server using Express');
});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server is listening at http://%s:%s", host, port)
});
