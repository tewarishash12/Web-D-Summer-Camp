const express = require('express');

const server = express();

server.listen(3000, 'localhost', ()=>{
    console.log("Server started");
});

server.get('/', (req, res)=>{
    console.log(req.url,req.method)
    res.sendFile('C:/Users/tewar/Desktop/Web D Summer Camp/Another form/form-grid.html');
});

server.get('/about', (req,res)=>{
    console.log(res.url, req.method);
    res.sendFile('C:/Users/tewar/Desktop/Web D Summer Camp/chess/chess.html');
});

server.use((req,res)=>{
    res.sendFile('C:/Users/tewar/Desktop/Web D Summer Camp/Node.js/first.html')
});