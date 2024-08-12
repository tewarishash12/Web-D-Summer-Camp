let str = "shashwat";
let newStr = ""

for(let i=0;i<str.length;i++){
    newStr += String.fromCharCode(str.charCodeAt(i) + 1);
}

console.log(newStr);