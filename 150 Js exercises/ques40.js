function check_eight(num1, num2){
    if(num1==8 || num2==8 || (num1+num2==8) || (Math.abs(num1-num2)==8))
        return true;
    return false;
}

console.log(check_eight(16,7));