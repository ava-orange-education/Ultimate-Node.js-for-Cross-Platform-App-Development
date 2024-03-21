const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('saved', () => {
    console.log(`A events saved called.`);
});
