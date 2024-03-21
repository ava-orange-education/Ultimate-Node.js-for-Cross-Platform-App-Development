console.log("Start");

setTimeout(function callbackFunc(){
    console.log("Set time out called");
},5000);

fetch("http://example.com/").then(function outPutFunc(){
    console.log("Call back from example api");
}); 

//......................
//.....................

console.log("end");

Start
End
Call back from example api
Set time out called
