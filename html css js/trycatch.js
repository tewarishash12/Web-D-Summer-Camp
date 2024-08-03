// let variable = 10;
// console.log(variable);

// try{
//     console.log(variable2);
// }catch(error){
//     console.log("The above variable isn't present")
//     console.log(typeof error);
//     console.log(error.message);
// }

// let variable2 = 20;
// console.log(variable2);

function divide(a,b,c){
    if(b===0){
        throw new Error("Cannot divide by 0");
    }
    return a/b;
}

try{
    console.log(divide(3,0));
}catch(error){
    console.log("Cannot divide by 0");
}