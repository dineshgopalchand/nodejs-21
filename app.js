const http = require("http");

const port = 8081;
const express = require('express');
const app = express();
var cors = require('cors')
var morgan = require('morgan');
app.use(morgan(':method :url :remote-addr - :remote-user [:date[clf]] " HTTP/:http-version"  ":referrer" ":user-agent" -- :status :res[content-length] - :response-time ms '));
// var pageRouter = require('./router/pages.js');
// var apiRouter = require('./router/api.js');
const { pageRouter, apiRouter } = require('./router');
app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// middleware introduction
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