const fs = require("fs");

const { readFile } = require("fs");

const existingFile = ".\\file\\existing_file.txt";
const content = "This is the new content I want to change in the file";

fs.readFile(existingFile,"utf-8",(err, data)=>{
    if(err)
        console.log(err.message);
    else
        console.log(data);
});

// fs.writeFile(existingFile, content, (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Shashwat")
// });

// console.log("This is outside");



// console.log(fs.existsSync(existingFile));

