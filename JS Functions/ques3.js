function generateStrings(str){
    let arr = [];

    function strings(prefix, remains){
        if(prefix.length>0)
            arr.push(prefix);

        for(let i=0;i<remains.length;i++)
            strings(prefix+remains[i],remains.slice(i+1));
    }

    strings('', str);
    return arr;
}

console.log(generateStrings('dog'));