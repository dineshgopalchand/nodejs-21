const eventEmitter = require('../events');
eventEmitter.on('customeev', function(e) {
    console.log('from custom ev - function.js');
});
eventEmitter.on('customeevent', function(e) {
    console.log('from custom event - function.js');
});
eventEmitter.on('showlog', function(e) {
    console.log('from showlog - function.js');
});