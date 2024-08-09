const express = require('express');
const server = express();

const mod = require('./exportexpmodule.js');

server.listen(3000);

server.get('/', (req,res)=>{
    mod.sayHello();
    mod.greeting("Shashwat");
    res.send('Home Page')
})