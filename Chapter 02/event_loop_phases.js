// Timers
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 2000);

console.log('End');




const fs = require('fs');
const readStream = fs.createReadStream('./file.txt');

console.log('Start');

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

console.log('End');

////////////////////////////////

const fs = require("fs");

let counter = 0;

fs.readFile("path/to/file", {
    encoding: "utf8"
}, () => {
    console.log(`Inside I/O, counter = ${++counter}`);

    setImmediate(() => {
        console.log(`setImmediate 1 from I/O callback, counter = ${++counter}`);
    });

    setTimeout(() => {
        console.log(`setTimeout from I/O callback, counter = ${++counter}`);
    }, 0);

    setImmediate(() => {
        console.log(`setImmediate 2 from I/O callback, counter = ${++counter}`);
    });
});