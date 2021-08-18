const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.send('Hello World');
});
// router.get('/contact', beforeLoad, function(req, res) {
router.get('/contact', function(req, res) {
    // return res.send('contact page');
    return res.send('<h1>Contact page</h1><p>this is contact page</p>')
});

module.exports = router;