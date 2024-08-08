const express = require('express');
const server = express();
const ejs = require('ejs');

server.listen(3000);

server.set('view engine', 'ejs')

server.set('views', 'ejshw');

server.get('/', (req, res)=>{
    res.render('loop');
});


server.get('/date', (req, res)=>{
    let currentHours = new Date().getHours();
    res.render('date', {currentHours});
});

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

server.get('/list', (req, res)=>{
    res.render('list', {fruits});
});

const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
    { name: 'Diana', age: 30 },
    { name: 'Edward', age: 25 }
];

server.get('/table', (req, res)=>{
    res.render('userobjects', {people});
});

let isLoggedIn = true;

server.get('/user', (req, res)=>{
    res.render('user_check', {isLoggedIn});
});

server.get('/fizz', (req, res)=>{
    res.render('fizzbuzz');
});

server.get('/tables', (req, res)=>{
    res.render('nestedTables');
});

