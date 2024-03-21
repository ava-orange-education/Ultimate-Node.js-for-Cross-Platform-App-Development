

var buffer1 = new Buffer.from('Using NodeJS ');
var buffer2 = new Buffer.from('Concatenating buffers');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
