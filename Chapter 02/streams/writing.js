var fs = require("fs");
var data = 'This is sample data that will be used to write to stream';

// This will create a writable stream  
var writerStream = fs.createWriteStream('output.txt');

// This is used to write the data to stream with given encoding of utf8  
writerStream.write(data, 'UTF8');

//This is used to mark the end of file and finish writing  
writerStream.end();

// This will handle stream events finish
writerStream.on('finish', function () {
    console.log("Writing data completed.");
});

// This will handle stream events error
writerStream.on('error', function (err) {
    console.log("Error while writing data.");
    console.log(err.stack);
});

const stream = require('node:stream');

