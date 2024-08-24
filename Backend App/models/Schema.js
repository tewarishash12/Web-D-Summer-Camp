const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogPost = new Schema({
    "title":{type:String, required:true},
    "content": {type:String, required:true},
    "author": {type:String, required:true},
    "createdAt": {type:Date, default:Date.now}
});

const Blogs = mongoose.model('BlogPost', blogPost, 'blogs');

module.exports = Blogs;