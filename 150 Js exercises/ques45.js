function check_for_15(num1,num2){
    return (num1==15 || num2==15 || (num1+num2==15) || Math.abs(num1-num2)==15)
}

console.log(check_for_15(7,8));
console.log(check_for_15(15,3));
console.log(check_for_15(18,3));