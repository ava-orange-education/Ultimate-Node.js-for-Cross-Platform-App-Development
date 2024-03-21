var fs = require("fs");

// Asynchronous read  
fs.readFile('data.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous reading data from file: " + data.toString());
});

// Synchronous read  
var data = fs.readFileSync('data.txt');
console.log("Synchronous reading data from file: " + data.toString());


//File Open
//fs.open(path, flags[, mode], callback)   

var fs = require("fs");

// Asynchronous - Opening File  
console.log("open a file Asynchronous!");
fs.open('data.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("Data File opened successfully!");
});

//fs.stat(path, callback)  
var fs = require("fs");
console.log("Going to get file info!");
fs.stat('sample.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    //console.log(stats);
    console.log("Displaying file info successfully...");
    // Check file type  
    console.log("check if File - " + stats.isFile());
    console.log("check if Directory - " + stats.isDirectory());
});  
