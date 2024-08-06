const express = require('express');
const server = express();

const path = require('path');

server.listen(3000);

server.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../HTML_files/home.html"));
})

server.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname, "../HTML_files/about.html"));
})

server.get('/blog', (req,res)=>{
    res.sendFile(path.join(__dirname, "../HTML_files/blog.html"));
})

server.get('/newblog', (req,res)=>{
    res.sendFile(path.join(__dirname, "../HTML_files/newblog.html"));
})

server.use('/error', (req,res)=>{
    res.sendFile(path.join(__dirname, "../HTML_files/error.html"));
})