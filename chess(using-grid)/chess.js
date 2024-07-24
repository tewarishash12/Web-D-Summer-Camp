const chessBoard=document.getElementById('chessBoard');

const head = document.getElementById('container');
head.style.color = "white";
head.style.fontSize = "50px";

let body = document.body;
body.style.height = "100vh";
body.style.display = 'flex';
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";

body.style.background = "url(https://images.unsplash.com/photo-1485254767195-60704c46702e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFxdWElMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D) no-repeat";
body.style.backgroundSize = "cover";

chessBoard.style.display='grid';
chessBoard.style.gridTemplateColumns = 'repeat(8, 50px)';
chessBoard.style.height = "400px";
chessBoard.style.width = "400px";
let count=0;

for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        const square = document.createElement('div');
        square.className = 'square';
        square.style.display = 'flex';
        square.style.justifyContent = "center";
        square.style.alignItems = "center";
        square.style.border = "2px solid black"
        if((i+j)%2===0){
            square.classList.add('white');
            square.style.backgroundColor = 'rgb(177,228,185)';
            square.style.width="50px";
            square.style.height="50px";
            square.style.fontSize = "20px";
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = 'white';
            });
            square.addEventListener("mouseout", function(){
                square.style.backgroundColor = 'rgb(177,228,185)';
            });            
        }
        else{
            square.classList.add('black');
            square.style.backgroundColor = 'rgb(112,162,163)';
            square.style.color = 'black';
            square.style.width="50px";
            square.style.height="50px";
            square.style.fontSize = "20px";
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = 'black';
                square.style.color = 'white';
            });
            square.addEventListener("mouseout", function(){
                square.style.backgroundColor = 'rgb(112,162,163)';
                square.style.color = 'black';
            });
        }
        chessBoard.appendChild(square);
        square.textContent=count;
        count++;
    }
}