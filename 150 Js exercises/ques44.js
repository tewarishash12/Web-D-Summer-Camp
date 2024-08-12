function check_fn(x, y, z){
    return ((x>y && x<z) || (x<y && x>z));
}

function check_for_20(num, a,b){
    if(num>20)
        return check_fn(num, a,b);
    return false;
}

console.log(check_for_20(12, 23, 32));
console.log(check_for_20(23, 32, 12));
console.log(check_for_20(32, 12, 23));
