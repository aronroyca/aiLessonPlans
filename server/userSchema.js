const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model('user', user)

exports.User = User