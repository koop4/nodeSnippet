const events = require('events');
const util = require('util');

const Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter)


const people = {
    james: new Person('James'),
    john: new Person('John'),
    Babe: new Person('Babe')
}

Object.keys(people).forEach( name => {
    people[name].on('speak', (msg) => {
        console.log('Hi, i am', name+'.', msg)
    });
});

people.james.emit('speak', 'Nice to meet you!');