const express = require('express');
const router = express.Router();

const BlogPost = require('../models/Schema');

router.get('/', async(req,res)=>{
    try{
        const blogs = await BlogPost.find();
        res.json(blogs);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', async(req,res)=>{
    try{
        const blog= await BlogPost.findById(req.params.id);
        if(!blog)
            return res.status(404).json({message: "Requested blog not available"});
        res.json(blog);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.post('/', async(req,res)=>{
    let {title, content, author} = req.body;

    const blog = new BlogPost({
        title,
        content,
        author
    });

    try{
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

router.delete('/:id', async(req,res)=>{
    console.log("Delete")
    try{
        const blog = await BlogPost.findByIdAndDelete(req.params.id);
        if(!blog)
            return res.status(404).json({message:"Blog is not present"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

module.exports = router;