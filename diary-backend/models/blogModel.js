const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    images: [String]
});

const BlogPost = mongoose.model('blog post', BlogPostSchema);

module.exports = BlogPost;