const http = require("http");

const host = 'localhost';
const port = 8000;

const requestHandler = function(req, res) {
    if(req.body){
        console.log(`Request body`, req.body);
    }
   
    res.send("Hello World from Node.js HTTP Server");
}

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});