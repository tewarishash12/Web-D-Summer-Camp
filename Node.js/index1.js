const express = require('express');
const ejs = require('ejs');
const server = express();

server.set('view engine', 'ejs');
server.set('views', 'views');

server.listen(3000);

server.use(express.static('public'));

server.get('/', (req,res)=>{
    res.render('about', {title: 'ABOUT'});
});

server.get('/index', (req,res)=>{
    res.render('index', {title: "HOME"})
})

//add a custom middleware
// server.use(middleware1, middleware2)

// function middleware1(req, res, next){
//     console.log("Middleware 1");
//     next();
// }

// function middleware2(req, res, next){
//     console.log("Middleware 1");
//     next();
// }

// //create an object where key m1 and m2 

// const middlewares = {
//     "m1": function(req, res, next){
//         console.log("Middleware m1 inside object");
//         next();
//     },

//     "m2": function(req, res, next){
//         console.log("Middleware m2 inside object");
//         next();
//     }
// }

// server.use(middlewares.m1, middlewares.m2);
// server.use(middlewares["m1"], middlewares["m2"]);


// server.use((req,res, next)=>{
//     let var_2 = "This is the error page"
//     console.log("New Request")
//     res.status(404).render('error' , {var_2, title: 'ERROR'});
//     next();
// })


