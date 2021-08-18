const http = require("http");

const port = 8081;
const express = require('express');
const app = express();
// const app = require('express')();
// const app= express();

app.get('/', function(req, res) {
    res.send('Hello World')
});
// app.post('/', function(req, res) {
//     console.log(req);
//     // res.send('post method');
//     res.send({ message: 'post method' });
// })
app.post('/', (req, res) => {
    console.log(req);
    // res.send('post method');
    res.send({ message: 'post method' });
})

app.listen(port, () => {
    console.log(` server started at http://127.0.0.1:${port}`);
})


// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');