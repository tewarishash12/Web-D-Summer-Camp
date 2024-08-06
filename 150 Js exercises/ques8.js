function generate_prompt(){
    let a = prompt("Enter a number between 1 to 10");
    let random = Math.floor(Math.random()*10 +1);

    if(a===random)
        alert("Good Work");
    else
        alert("Not matched");
}