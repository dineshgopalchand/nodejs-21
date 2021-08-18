const http = require("http");

const port = 8081;
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
    // const app = require('express')();
    // const app= express();

const beforeLoad = (req, res, next) => {
    console.log('before Load');
    // next();
    const notValidCondition = 0;
    if (notValidCondition) {
        return res.status(401).send();
    }
    next();
    // res.send('form before load');
}
app.use(beforeLoad);

app.get('/', function(req, res) {
    res.send('Hello World');
});
app.get('/contact', beforeLoad, function(req, res) {
    // return res.send('contact page');
    return res.send('<h1>Contact page</h1><p>this is contact page</p>')
});


app.get('**', (req, res) => {
    res.status(404);
    res.send({ message: 'Not Found' });
})

app.listen(port, () => {
    console.log(` server started at http://127.0.0.1:${port}`);
})


// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');