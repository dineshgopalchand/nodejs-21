const express = require('express');
const router = express.Router();
const userRouter = require('./user');


router.get('/article/1/how-to-read-fast', (req, res) => {
    const userName = 'dinesh';
    const userData = usersData.filter(item => item.name == userName);
    return res.send({
        response: userData
    })
});

router.use('/user', userRouter);

module.exports = router;