const express = require('express');
const { findAllUsers, findOneUser, deleteUser } = require('../controllers/userController');
const { createUser } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(findAllUsers)

router
    .route('/signup')
    .post(createUser)

router
    .route('/:id')
    .get(findOneUser)
    .delete(deleteUser)

module.exports = router;