const express = require('express');
const server = express();

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views','views');

server.use(express.static('public'));

server.get('/', (req,res)=>{
    res.render('newfile');
})