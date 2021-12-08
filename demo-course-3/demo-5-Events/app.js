const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
}

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.off('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected');

myEmmiter.on('msg', data => {
    console.log(`Got: ${data}`);
});

myEmmiter.prependListener('msg', () => {
    console.log("I am a prepend lister for the MSG event");
})

myEmmiter.emit('msg', 'Hello, get my message');

myEmmiter.once('once', () => {
    console.log('ONCEONCE');
});

myEmmiter.emit('once');
myEmmiter.emit('once');


console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.listenerCount('msg'));
console.log(myEmmiter.listenerCount('once'));
console.log(myEmmiter.listeners('msg'));
console.log(myEmmiter.eventNames());

myEmmiter.on('error', (error) => {
    console.log(`Internal Error: ${error.message}`);
});

myEmmiter.emit('error', new Error('BOOOM!'));
myEmmiter.emit('msg', new Error('BOOOM!'));

////////////////////////

const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target');
}

target.addEventListener('connected',  logTarget);
target.dispatchEvent(new Event('connected'));