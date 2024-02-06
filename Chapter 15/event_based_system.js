// Import the 'events' module 
const events = require('events');

console.log("Start");

// Create an EventEmitter object 
const eventEmitter = new events.EventEmitter();

// Handler used to process fired the event 
const connectHandler = function connected() {
    console.log('Connection established.');

    // Fire the corresponding event 
    eventEmitter.emit('data_received');
}

// Binds the event with handler 
eventEmitter.on('connection', connectHandler);

// Lisen to the events for the data received 
eventEmitter.on(
    'data_received',
    function () {
        console.log('Data Transfer Successful.');
    });

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Finish");