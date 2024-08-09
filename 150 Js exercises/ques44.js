function check_fn(x, y, z){
    if(x>y && x<z)
        return true;
}

function check_for_20(num, a,b){
    if(num>20)
        return check_fn(num, a,b);
}

console.log(check_for_20(12, 23, 32));
console.log(check_for_20(23, 32, 12));
console.log(check_for_20(32, 12, 23));
