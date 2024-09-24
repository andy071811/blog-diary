const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const blogRouter = require('./routes/blogRouter')
const authRouter = require('./routes/authRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/my-posts', blogRouter);
app.use('/api/login', authRouter);

module.exports = app;