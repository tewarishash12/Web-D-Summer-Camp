const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.listen(3000);

server.use(cookieParser());

server.get('/', (req,res)=>{
    res.send("Home page");
});

server.get('/sendCookie', (req,res)=>{
    res.cookie('fname', 'Shashwat');
    res.send("Cookie has been sent");
});

server.get('/seeCookie', (req,res)=>{
    const fname = req.cookies.fname;
    res.send(fname);
})


server.use('/favicon.ico', (req,res)=>{
    res.sendStatus(204).end();
})