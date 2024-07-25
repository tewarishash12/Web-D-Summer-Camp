let array = [["AC", "()", "%", "/"], ["7", "8", "9","x"], ["4","5","6","-"],["1","2","3","+"],["0",".","del","="]]
let body = document.body;
body.style.display = "flex";
body.style.height = "100vh";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column-reverse";


const answers = document.createElement('div');
body.appendChild(answers);

const inputField = document.createElement('input');
answers.appendChild(inputField);
inputField.id = "input";
inputField.style.height = "50px";
inputField.style.width = "300px";
inputField.style.marginBottom = "10px";
inputField.style.fontSize = "30px";
inputField.style.textAlign = "right";

const container = document.getElementById("container");

container.style.display = 'grid';
container.style.gridTemplateColumns = "repeat(4, 70px)";
container.style.gridTemplateRows = "repeat(5, 70px)";
container.style.gap= "10px";
container.style.backgroundColor = "white";


for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
        const box = document.createElement('div');
        container.appendChild(box);
        box.id = `box${i}${j}`;
        box.classList.add("btns");
        box.style.backgroundColor= "lightgray";
        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.fontSize = "30px";
        box.innerHTML = array[i][j];
        if(array[i][j]==="del")
            box.style.backgroundColor= "red";
        else if(array[i][j]==="=")
            box.style.backgroundColor= "green";
    }
}

const btn = document.querySelectorAll(".btns");

btn.forEach(button =>{
    button.addEventListener('mouseover',function(){
        button.style.backgroundColor = "blue";        
    });

    button.addEventListener('mouseout',function(){
        button.style.backgroundColor = "lightgray";        
        if(button.innerHTML==="del")
            button.style.backgroundColor = "red";        
        else if(button.innerHTML==="=")
            button.style.backgroundColor = "green";        
    });
});

let count=0;
for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
        const item = document.getElementById(`box${i}${j}`);
        switch(item.innerHTML){
            case "AC":
                item.addEventListener('click', function(){
                    document.getElementById("input").value = "";
                    count=0;
                });
                break;
            case "()":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += count%2===0 ? "(" : ")";
                count++;
                });
                break;
            case "%":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "%";
                });
                break;
            case "/":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "/";
                });
                break;
            case "7":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "7";
                });
                break;
            case "8":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "8";
                });
                break;
            case "9":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "9";
                });
                break;
            case "x":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "*";
                });
                break;
            case "4":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "4";
                });
                break;
            case "5":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "5";
                });
                break;
            case "6":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "6";
                });
                break;
            case "-":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "-";
                });
                break;
            case "1":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "1";
                });
                break;
            case "2":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "2";
                });
                break;
            case "3":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "3";
                });
                break;
            case "+":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "+";
                });
                break;
            case "+":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "+";
                });
                break;
            case "0":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += "0";
                });
                break;
            case ".":
                item.addEventListener('click', function(){
                    document.getElementById("input").value += ".";
                });
                break;
            case "del":
                item.addEventListener('click', function(){
                    const length = inputField.value.length;
                    inputField.value = document.getElementById("input").value.slice(0,-1);
                });
                break;
            case "=":
                item.addEventListener('click', function(){
                    try{
                        let answer = eval(document.getElementById("input").value)
                        document.getElementById("input").value = answer;
                    } catch(error){
                        document.getElementById("input").value= "Error";
                    }
                });
                break;
        }
    }
}

