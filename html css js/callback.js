// function sum(a,b){
//     return a+b;
// }

// function sum3(a,b,c){
//     const sum2 = sum(a,b);
//     const sum3 = sum(sum2,c);
//     return sum3;
// }

// console.log(sum3(1,2,66));


// function f1(callback){
//     console.log("I am inside F1 function");
//     callback();
// }

// function sayHello(){
//     console.log("Hello");
// }

// function sayGoodbye(){
//     console.log("GoodBye");
// }

// f1(sayHello);
// f1(sayGoodbye);

// function f2(name, callback){
//     console.log("I am inside F2 function");
//     callback(name);
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function sayGoodbye(name){
//     console.log(`GoodBye ${name}`);
// }

// f2('Alice', (name)=> console.log(`Hello ${name}`))
// f2('Bob', (name)=> console.log(`Hello ${name}`))

function f3(name, callback){
    console.log("I am inside f3")
    if(typeof name === 'string'){
        const data = `Hello ${name}`;
        callback(null, data);
    }else{
        const error = new Error(`Error: It is a number`);
        callback(error, null);
    }
}

// function greet(error,data){
//     if(error)
//         console.log(error.message);
//     else
//         console.log(data);
// }

f3('1203', (error, name) => error===null ?  console.log(name) : console.log(error.message));