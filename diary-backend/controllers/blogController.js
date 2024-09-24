const BlogPost = require('../models/blogModel');

exports.getAllPosts = async (req, res) => {
    const posts = await BlogPost
        .find()

    res.status(200).json({
        status: 'ok',
        totalPosts: posts.length,
        posts
    });
};

exports.createNewPost = async (req, res) => {

    let image;
    if (req.file) image = req.file.filename;

    const newPost = await BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        images: image
    });

    res.status(201).json({
        status: 'ok',
        newPost
    });
};

exports.deletePost = async (req, res) => {
    const { id } = await BlogPost.findByIdAndDelete(req.params.id);

    if (!id) return res.status(404).json({ message: "post not found", id });

    res.status(204).json({
        data: null
    });

}