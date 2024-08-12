function reverse(str , revString){
    if(str.length==1)
        return revString+str;
    return reverse(str.substring(0,str.length-1),revString+ str.charAt(str.length-1))
}

console.log(reverse('shashwat', ''))