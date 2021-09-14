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
    },
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: false,
        default: ''
    },
    address: {
        type: String,
        required: false,
        default: ''
    },
    createdOn: {
        type: Date,
        required: false,
        default: Date.now
    },
    isEmailVerified: {
        type: Boolean,
        required: false,
        default: false
    }
});

var Users = mongoose.model("User", userSchema);
module.exports = Users;