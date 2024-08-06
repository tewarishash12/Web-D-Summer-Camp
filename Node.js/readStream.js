const fs = require("fs");

const fileName = ".\\file\\bigfile.txt";



const dataStream = fs.createReadStream(fileName,{encoding: 'utf-8', highWaterMark: 1024});

let counter = 0;
dataStream.on('data' ,(chunk)=>{
    console.log("\n\n *****************new Chunk Received\n\n");
    console.log(chunk);
    console.log(counter);
    counter++;
});