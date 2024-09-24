const express = require('express');
const { logInUser } = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .post(logInUser)

module.exports = router;

// npm i passport & passport-local, express-session, 