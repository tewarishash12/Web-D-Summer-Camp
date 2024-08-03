const fs = require("fs");

const { readFile } = require("fs");

const existingFile = "./file/existing_ile.txt";
const content = "This is the content I want to change in the file";

// fs.readFile(existingFile, "utf-8" ,(err, data)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// });

// fs.writeFile(existingFile,content, (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("shashwat tewari is here");
// });

console.log(fs.existsSync(existingFile));
// fs.exists()