const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/verifyToken');
const usersData = require('../data/users');

router.use(verifyToken);
router.get('/user-list', (req, res) => {
    return res.send({
        response: usersData
    })
});

// router.get('/user/1/dinesh', (req, res) => {
router.get('/user/:id/:name', (req, res) => {
    // const userName = 'dinesh';
    console.log(req.params);
    const userName = req.params.name;
    // const userId = 1;
    const userId = req.params.id;
    const userData = usersData.filter(item => item.name == userName && item.id == userId);
    return res.send({
        response: userData
    })
});
router.get('/article/1/how-to-read-fast', (req, res) => {
    const userName = 'dinesh';
    const userData = usersData.filter(item => item.name == userName);
    return res.send({
        response: userData
    })
});

module.exports = router;