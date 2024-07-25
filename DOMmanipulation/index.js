const body = document.body;

const container = document.getElementById('container');
container.style.display = 'flex';
container.style.justifyContent="center";
container.style.alignItems="center";
container.style.height="80vh";
container.style.gap = "5px";

const black = document.createElement('div');
black.className = "color";
black.style.backgroundColor = "black";
black.classList.add('black');
container.appendChild(black);

const red = document.createElement('div');
red.className = "color";
red.style.backgroundColor = "red";
black.classList.add('red');
container.appendChild(red);

const green = document.createElement('div');
green.className = "color";
green.style.backgroundColor = "green";
black.classList.add('green');
container.appendChild(green);

const yellow = document.createElement('div');
yellow.className = "color";
yellow.style.backgroundColor = "yellow";
black.classList.add('yellow');   
container.appendChild(yellow);

let colors = document.querySelectorAll('.color');

colors.forEach(boxes => {
    boxes.style.width = "100px";
    boxes.style.height = "100px";
});

black.addEventListener('click', function(){
    body.style.backgroundColor = "black";
    black.style.border = "2px solid white";
    red.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
});

red.addEventListener('click', function(){
    body.style.backgroundColor = "red";
    red.style.border = "2px solid white";
    black.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
});

green.addEventListener('click', function(){
    body.style.backgroundColor = "green";
    green.style.border = "2px solid white";
    red.style.border = "none";
    black.style.border = "none";
    yellow.style.border = "none";
});

yellow.addEventListener('click', function(){
    body.style.backgroundColor = "yellow";
    yellow.style.border = "2px solid white";
    red.style.border = "none";
    green.style.border = "none";
    black.style.border = "none";
});
