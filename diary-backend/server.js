const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT
DB = process.env.DB.replace('<db_password>', process.env.DB_PASS);

mongoose.connect(DB).then(
    console.log("Database connected")
);

app.listen(PORT, () => {
    console.log("App now listening on port 3000")
});