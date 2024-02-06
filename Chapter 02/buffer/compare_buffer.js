var buf1 = new Buffer.from('123');
var buf2 = new Buffer.from('678');
var res = buf1.compare(buf2);

if(res < 0) {
   console.log(buf1 +" less than " + buf2);
} else if(res === 0) {
   console.log(buf1 +" is same as " + buf2);
} else {
   console.log(buf1 +" greater than " + buf2);
}

buf.compare(otherBuffer);