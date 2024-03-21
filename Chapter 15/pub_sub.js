const EventEmitter = require('events');
const pubsub = new EventEmitter();

// Publisher
setInterval(() => {
  pubsub.emit('message', 'Hello, subscribers!');
}, 1000);

// Subscriber 1
pubsub.on('message', (message) => {
  console.log('Subscriber 1 received:', message);
});

// Subscriber 2
pubsub.on('message', (message) => {
  console.log('Subscriber 2 received:', message);
});