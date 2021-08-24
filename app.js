const http = require("http");


const express = require('express');
const app = express();
var cors = require('cors')
var morgan = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()
app.use(morgan(':method :url :remote-addr - :remote-user [:date[clf]] " HTTP/:http-version"  ":referrer" ":user-agent" -- :status :res[content-length] - :response-time ms '));
// var pageRouter = require('./router/pages.js');
// var apiRouter = require('./router/api.js');
const { pageRouter, apiRouter } = require('./router');
app.use(cors());

const port = process.env.PORT || 80;
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// mongodb connect

mongoose.connect(process.env.DBCONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log('unable to connect to db');
    }
});


// setting up template engin
app.set('view engine', 'pug');
app.set('views', './views');

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
app.use(express.static('public/html'));
// app.get('/contact', function(req, res) {
//     return res.render('contact');
// });
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