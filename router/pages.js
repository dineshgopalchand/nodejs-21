const express = require('express');
const router = express.Router();
const path = require('path');


// router.get('/', function(req, res) {
//     // res.send('Hello World');
//     console.log(path.join(__dirname + '/../public/html/index.html'));
//     res.sendFile(path.join(__dirname + '/../public/html/index.html'));
// });
// router.get('/contact', beforeLoad, function(req, res) {
router.get('/contact', function(req, res) {
    // return res.send('contact page');
    // const description = 'asdfadsfd';
    // return res.send('<h1>Contact page</h1><p>' + description + '</p>')
    return res.render('contact', {
        title: "Contact page | Nodejs",
        keyword: "contact page, nodejs practice",
        heading: 'Contact page',
        description: 'some description'
    });
});
router.post('/contact', (req, res) => {
    return res.render('contact', {
        title: "Contact page | Nodejs",
        keyword: "contact page, nodejs practice",
        heading: 'Contact page',
        description: 'some description',
        formdata: req.body
    });
});

module.exports = router;