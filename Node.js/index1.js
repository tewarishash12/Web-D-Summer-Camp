const express = require('express');
const ejs = require('ejs');
const server = express();

server.listen(3000);

server.set('view engine','ejs');

server.set('views', 'views');

server.get('/', (req,res)=>{
    let variable_1 = "This is a new variable";
    res.render('index', {variable_1, title: 'HOME'});
});

const students =  ["Ajay","Aman","Amit","Alok"];


server.get('/students', (req,res)=>{
    res.render('students', {students, title: 'STUDENTS'});
});

server.get('/about', (req,res)=>{
    let var_3 = "This is about page";
    res.render('about', {var_3, title: 'ABOUT'});
});

server.use((req,res)=>{
    let var_2 = "This is the error page"
    res.status(404).render('error' , {var_2, title: 'ERROR'});
})
