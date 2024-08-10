const express = require('express');
const server = express();
const mod = require('./exportexpmodule.js');

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

server.get('/', (req, res) => {
    // res.send(mod.sayHello()); // send the response from sayHello
    res.send(mod.greeting("Shashwat")); // logs the greeting to the console
});