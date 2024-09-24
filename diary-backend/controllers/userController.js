const bcrypt = require('bcrypt');

const User = require("../models/userModel");

exports.findAllUsers = async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        status: 'success',
        users
    });
};

exports.findOneUser = async (req, res, next) => {

    const { id } = req.params
    const user = await User.findById({ _id: id });

    if (!user) return res.status(404).json({ msg: "no user found"})

        res.status(200).json({
            user
        })

    
};

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete({ _id: id })

    if (!user) return res.status(500).json({ msg: 'no user found'});

    res.status(204).json({
        msg: 'success, user deleted'
    })
}