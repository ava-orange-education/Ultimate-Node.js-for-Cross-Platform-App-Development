var sourceBuf = Buffer.alloc(123);

//copy a buffer
var targetBuf = Buffer.from('ABC');
sourceBuf.copy(targetBuf);
console.log("Target Buffer content: " + targetBuf.toString());

buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

PS D:\Demo\Chapter-2\buffer> node copy_buffer.js
