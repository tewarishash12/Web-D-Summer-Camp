// console.log(typeof global);

// // setTimeout(()=>{
// //     console.log("setTimeout");
// // }, 1000);

// console.log(global.process.cwd()); // Access current working directory

// console.log("Current working directory", process.cwd());
// console.log(__dirname);
// console.log(__filename);

// console.log(document);

const importedFileObj = require('./two_people');
const {people , age} = importedFileObj;

console.log(people);
console.log(age);

console.log(typeof importedFileObj)


// console.log(importedFileObj.age)
// console.log(typeof importedFileObj.sayHello)