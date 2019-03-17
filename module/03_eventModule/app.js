const events = require('events');

const myEmitter = new events.EventEmitter();

const behave = (msg) => {
    console.log(msg)
};

myEmitter.on('myEvent', behave);

myEmitter.emit('myEvent', 'Hi there!');