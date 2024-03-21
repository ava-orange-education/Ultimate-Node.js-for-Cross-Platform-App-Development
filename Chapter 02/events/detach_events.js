const EventEmitter = require('events');
const emitter = new EventEmitter();
// declare the event handler
function log(arg) {
    console.log(`A saved event occurred having args, name: ${arg.name}, id: ${arg.id}`);
}

// attach the event listener to the saved event
emitter.on('saved', log);

// emit the saved event
emitter.emit('saved', {
    id: 1,
    name: 'Test'
});

// remove the event listener
emitter.off('saved', log);

// no effect
emitter.emit('saved', {
    id: 2,
    name: 'ABC'
});
