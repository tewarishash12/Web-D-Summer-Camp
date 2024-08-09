const express = require('express');
const server = express();

server.listen(3000);

server.use(loggingMiddleware, timeMiddleware);

function loggingMiddleware(req,res,next){
    console.log(req.method, req.url, req.hostname, req.path);
    next();
}

function timeMiddleware(req,res,next){
    req.requestTime = new Date().toISOString();
    console.log(`Request received at ${req.requestTime}`);
    next();
}

server.get('/', (req,res)=>{
    res.send(`Hello, world! Current time is ${req.requestTime}`);
});



