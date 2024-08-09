function check(num1, num2,num3){
    if(num1==num2 && num2==num3)
        return 30;
    else if(num1==num2 || num2==num3 || num1==num3)
        return 40;
    return 20; 
}

console.log(check(12,12,12));
console.log(check(12,14,12));
console.log(check(12,13,14));