const http = require('http');
const fs = require("fs");
const fileName = "first.html";

const server = http.createServer((req,res)=>{
    console.log(req.url, res.method);
    res.setHeader("Content-Type", "text/html");
    fs.readFile(fileName, (err, data)=>{
        if(err){
            res.statusCode = 500;
            console.log(err);
            console.log("Error checking of the file");
        }
        else{
            res.statusCode = 200;
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', ()=>{
    console.log("Server is listening at port 3000");
});