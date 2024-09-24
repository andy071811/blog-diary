const session = require('express-session');
const bcrypt = require('bcrypt');

const User = require("../models/userModel");

exports.logInUser = async (req, res, next) => {

    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
        return res.status(404).json({
            status: 'login failed',
            message: 'invalid credentials'
        });
    };

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
        return res.status(401).json({
            status: 'login failed',
            message: 'invalid credentials'
        });
    }

    res.status(200).json({
        status: 'success',
        message: `your username is ${username}`
    });
};

exports.createUser = async (req, res, next) => {

    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (user) return res.status(403).json({ status: 'failed', message: 'username already exists, please use password to log in or choose another username'})

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        username,
        password: hashedPassword,
        confirmPassword: hashedPassword
    });

    res.status(201).json({
        status: 'success',
        data: newUser
    });
};