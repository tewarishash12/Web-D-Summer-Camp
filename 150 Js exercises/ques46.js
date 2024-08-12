function check_for_factor(num1,num2){
    return (((num1%7==0 || num1%11==0) && !(num2%7==0 || num2%11==0)) || ((num2%7==0 || num2%11==0) && !(num1%7==0 || num1%11==0)))
}

console.log(check_for_factor(22,7));
console.log(check_for_factor(11,3));
console.log(check_for_factor(7,20));