const express = require('express');
const router = express.Router();
const usersData = require('../data/users');
const { v4: uuidv4 } = require('uuid');
const verifyToken = require('../auth/verifyToken');
const { User } = require('../model');
const bycrypt = require('bcryptjs');


router.use(verifyToken);

router.get('/list', async(req, res) => {

    const userList = await User.find({}, 'name email status username occupation address isEmailVerified status');
    console.log(userList);
    return res.send({
        userList
    })
});
router.get('/details/:id', async(req, res) => {
    const id = req.params.id;
    if (id) {
        const userDetails = await User.find({ _id: id }, 'name email status username occupation address isEmailVerified status');
        console.log(userDetails);
        return res.send({
            details: userDetails
        });
    } else {
        return res.status(401).send({
            message: 'invalid request'
        });
    }

});
// router.get('/user/1/dinesh', (req, res) => {
// router.get('/:id/:name', (req, res) => {
//     // const userName = 'dinesh';
//     console.log(req.params);
//     const userName = req.params.name;
//     // const userId = 1;
//     const userId = req.params.id;
//     const userData = usersData.filter(item => item.name == userName && item.id == userId);
//     return res.send({
//         response: userData
//     })
// });


// router.post('/register', async function(req, res) {
router.post('/register', async(req, res) => {
    const bodyVal = req.body;
    // User.save(bodyVal);
    const salt = await bycrypt.genSalt(10);
    bodyVal.password = await bycrypt.hash(bodyVal.password, salt);
    const user = new User(bodyVal);

    // console.log(user);


    const updateReport = await user.save();
    console.log(updateReport);
    // console.log(bodyVal);
    if (updateReport) {
        return res.send({
            userdetails: {
                id: updateReport._id,
                occupation: bodyVal.occupation,
                address: bodyVal.address,
                name: bodyVal.name,
                email: bodyVal.email,
                username: bodyVal.username
            }
        });
    }

});

module.exports = router;