const fs = require("fs");

const content = 'This is a sample line for text to increase the file size.\n';
const filename = '.\\file\\file.txt'
const writeStream = fs.createWriteStream(filename);

writeStream.write(content);
writeStream.write(content);

const dataStream = fs.createReadStream(filename,{encoding: 'utf-8'});
dataStream.on('data', (chunk)=>{
    console.log("\n\n*****************New Chunk Received*******************\n\n");
    console.log(chunk);
});