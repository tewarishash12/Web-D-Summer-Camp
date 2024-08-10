const express = require('express');
const server = express();
const fs = require('fs');

server.listen(3000);

server.set('view engine', 'ejs');

server.set('views', 'Blogpost');

server.get('/', (req,res)=>{
    res.render('home',{title: 'HOME'})
});

server.get('/about', (req,res)=>{
    res.render('about',{title: 'ABOUT'})
});

server.get('/contact', (req,res)=>{
    res.render('contact',{title: 'CONTACT US'})
});

const filePath1 = 'C:/Users/tewar/Desktop/Web D Summer Camp/EJS connect/Blogpost/Blogpages/blogpage1.ejs';
const filePath2 = 'C:/Users/tewar/Desktop/Web D Summer Camp/EJS connect/Blogpost/Blogpages/blogpage2.ejs';
const filePath3 = 'C:/Users/tewar/Desktop/Web D Summer Camp/EJS connect/Blogpost/Blogpages/blogpage3.ejs';
const filePath4 = 'C:/Users/tewar/Desktop/Web D Summer Camp/EJS connect/Blogpost/Blogpages/blogpage4.ejs';
const filePath5 = 'C:/Users/tewar/Desktop/Web D Summer Camp/EJS connect/Blogpost/Blogpages/blogpage5.ejs';

let arrPath = [filePath1, filePath2, filePath3, filePath4, filePath5];


server.get('/blogpage', (req,res)=>{
    let fileSelected = arrPath[Math.floor(Math.random()*arrPath.length)];
    fs.readFile(fileSelected, "utf-8", (err, data)=>{
        if(err){
            res.status(500).send("Error reading file");
            return;
        }
        res.render('blogpage',{data, title: 'BLOG PAGE'})
    })
});

server.get('/newblog', (req,res)=>{
    res.render('newblog',{title: 'NEW BLOG'})
});

