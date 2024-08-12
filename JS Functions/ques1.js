function reverse(num,x){
    if(num==0)
        return x;
    return reverse(Math.floor(num/10),x*10 + num%10);
}

console.log(reverse(22334,0));

