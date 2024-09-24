const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username must be filled in']
    },
    password: {
        type: String,
        required: [true, 'user must have a password'],
        minLength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'please confirm password'],
        select: false,
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'passwords do not match, check and try again'
        }
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;

