const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/verifyToken');

router.use(verifyToken);
router.get('/user-list', (req, res) => {
    res.send({
        response: [{
                id: 1,
                name: 'Dinesh',
                occupation: 'timepass',
                address: 'The Great India'
            },
            {
                id: 2,
                name: 'Ajay',
                occupation: 'Developer',
                address: 'The Great jharkhand'
            },
            {
                id: 1,
                name: 'Anil',
                occupation: 'Thinker',
                address: 'The Great Southern India'
            },
        ]
    })
});
module.exports = router;