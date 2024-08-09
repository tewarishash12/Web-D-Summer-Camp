function check(x,y,z){
    if(x==y || y==z || z==x)
        return true;
    return false
}

function lastDigit(a){
    return a%10; 
}

console.log(check(lastDigit(13),lastDigit(24),lastDigit(22)));

