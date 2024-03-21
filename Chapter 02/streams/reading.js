var fs = require("fs");
var data = '';

// This is used to Create a readable stream  
var readerStream = fs.createReadStream('input.txt');

// This will set the encoding to be utf8.   
readerStream.setEncoding('UTF8');

//This is used to Handle stream events data
readerStream.on('data', function (chunk) {
    data += chunk;
});

//This is used to Handle stream events end
readerStream.on('end', function () {
    console.log(data);
});

//This is used to Handle stream events error
readerStream.on('error', function (err) {
    console.log(err.stack);
});
