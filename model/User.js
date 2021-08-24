const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: false,
        default: true
    },
    password: {
        type: String,
        required: true,
    }
});

var Users = mongoose.model("User", userSchema);
module.exports = { Users };