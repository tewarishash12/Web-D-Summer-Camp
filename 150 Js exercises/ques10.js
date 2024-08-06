let value1 = document.getElementById('val1');
let value2 = document.getElementById('val2');
let res = document.getElementById('result');

function mult(){
    event.preventDefault();
    let val1 = value1.value;
    let val2 = value2.value;
    res.innerHTML = val1*val2;
}


function div(){
    event.preventDefault();
    let val1 = value1.value;
    let val2 = value2.value;
    if(val2!==0)
        res.innerHTML = val1/val2;
    else
        res.innerHTML = "Cannot divide by zero";
}