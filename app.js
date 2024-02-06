// //console.log("Hello world")

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');


console.log("Start");

setTimeout(function calback() {
    console.log("Set time out called");
}, 5000);

fetch("http://example.com/").then(function cbF() {
    console.log("Call back from api");
});

setTimeout(() => {
    // runs after 2 seconds
}, 2000);

const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();

window.addEventListener('load', () => {
    document.getElementById('button').addEventListener('click', () => {
        setTimeout(() => {
            fetch("http://example.com/").then(function cbF() {
                items.forEach(item => {
                    // more code  
                });
            });
        }, 2000);
    });
});


const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();


http.createServer(function (req, res) { 	 	
    res.writeHead(200, { 'Content-Type': 'text/plain' });    	
    res.end('Hello World!');
}).listen(3000);

$ nodejs --version
