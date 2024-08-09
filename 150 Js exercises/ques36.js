let num1= 32;
let num2= 22;
let num3= 41;

function lastDigit(num){
    return num%10;
}

let last1 = lastDigit(num1);
let last2 = lastDigit(num2);
let last3 = lastDigit(num3);

if(last1==last2 && last2==last3){
    console.log(true);
}
else
    console.log(false);