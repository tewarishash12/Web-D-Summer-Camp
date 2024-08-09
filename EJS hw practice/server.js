const EventEmitter = require('events');
const emitter = new EventEmitter();

// Increase the maximum listeners to 20 (or any desired number)
emitter.setMaxListeners(200);

// OR, if you're working with a specific instance, like a TLSSocket instance
myTLSSocket.setMaxListeners(200);
