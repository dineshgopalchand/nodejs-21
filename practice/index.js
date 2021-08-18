// console.log('log from app.js');

// const range = [...(Array.from({ length: 100 }).keys())].map(item => item + 1);
// for (const item of range) {
//     console.log(item);
// }
// console.log(1 + 1);

const fs = require('fs');
const ev = require('./events');
require('./__helper/function');

// synchronus method to read file
// fs.appendFileSync('test.html', 'asdfasdf');
const content = fs.readFileSync('./test.html');
console.log(content);
// console.log(content.toString());

// // asynchronus method to read file
// fs.readFile('test.html', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });

ev.on('customeeve', function(e) {
    console.log('from custom event', e);
});

ev.emit('customeeve', { message: 'some meessage' });
ev.emit('customeev');
ev.emit('customeevent');
ev.emit('showlog');