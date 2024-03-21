const EventEmitter = require('events');

class ClockTime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('tick');
    }, 1000);
  }
}

const clockTime = new ClockTime();

clockTime.on('tick', () => {
  console.log('Clock ticked!');
});