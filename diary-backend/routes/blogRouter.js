const express = require('express');
const multer = require('multer');
const { getAllPosts, createNewPost, deletePost } = require('../controllers/blogController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, '../diary-frontend/public/images');
    },
    filename: function(req, file, cb)  {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

router
    .route('/')
    .get(getAllPosts)
    .post(upload.single('image'), createNewPost)

router
    .route('/:id')
    .delete(deletePost)


module.exports = router;