'use strict'
console.log(Date.now().toString() + ': Program started');
setTimeout(() => {
    console.log(Date.now().toString() + 'Asynchronous processing complete.');
}, 20);
console.log(Date.now().toString() + 'Program ends');

Program started
Program ends
Asynchronous processing complete.