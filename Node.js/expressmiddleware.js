const express = require('express');
const server = express();

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use((req, res, next)=>{
    console.log("New Content");
    next();
});

server.use((req,res,next)=>{
    console.log('Time:', Date.now());
    next();
});

server.use(middleware1, middleware2);

function middleware1(req,res,next){
    console.log("Inside middleware 1");
    next();
    console.log("Returned from middleware 2");
}

function middleware2(req,res,next){
    console.log("Inside middleware 2");
    next();
}

server.get('/', (req,res,next)=>{
    console.log('This is the home page');
    res.send('Home Page');
})

const middlewares = {
    'm1': function(req,res,next){
        console.log("Inside object middleware 1");
        next();
    },
    'm2': function(req,res,next){
        console.log("Inside object middleware 2");
    }
}

server.use(middlewares.m1, middlewares.m2);

server.use('/favicon.ico', (req,res)=>{
    res.status(204).end();
});