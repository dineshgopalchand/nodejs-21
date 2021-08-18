module.exports = (req, res, next) => {
    const authToken = req.headers['authorization'];
    console.log(authToken);
    if (authToken) {
        next();
    } else {
        res.status(401).send({
            message: 'Token missing'
        })
    }

}