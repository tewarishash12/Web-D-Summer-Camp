// Promises
// JS provides us resolve & reject by default
//resolve (value): If job is finished successfully
//reject (error): If job fails

let promise = new Promise(function(resolve, reject){
    alert("Hello");
    promise(56);
});

console.log("Hello One");

setTimeout(function(){
    console.log("Hello Two")
}, 2000);

console.log("Hello Three");

