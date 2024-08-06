let str = "shashwat";

if(str.length>3){
    let lthree = str.substring(str.length-3)
    let newStr = lthree + str + lthree;
    console.log(newStr);
}