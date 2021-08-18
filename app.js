const http = require("http");

const port = 8081;
const express = require('express');
const app = express();
var cors = require('cors')
var pageRouter = require('./router/pages.js');
var apiRouter = require('./router/api.js');
app.use(cors())
    // const app = require('express')();
    // const app= express();

const beforeLoad = (req, res, next) => {
    console.log('before Load- Middleware');
    // next();
    const notValidCondition = 0;
    if (notValidCondition) {
        return res.status(401).send();
    }
    next();
    // res.send('form before load');
}
app.use(beforeLoad);

app.use('/', pageRouter);
app.use('/api', apiRouter);

app.get('**', (req, res) => {
    res.status(404);
    res.send({ message: 'Not Found' });
})

app.listen(port, () => {
    console.log(` server started at http://127.0.0.1:${port}`);
})


// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');