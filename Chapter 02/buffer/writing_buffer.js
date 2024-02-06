var buf = new Buffer.alloc(256);
var len = buf.write("writing Buffers of length 256");
console.log("Octets written : "+  len);
