const check = "aa";

let str = "JavaScript";

function checkStr(str, check){
    if(str.substring(2,4)==check)
        return true;
    return false;
}

console.log(checkStr(str, check));