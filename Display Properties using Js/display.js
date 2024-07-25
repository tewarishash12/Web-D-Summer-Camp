const container = document.getElementById('container');
container.style.height= "90vh";
container.style.width= "60vh";
container.style.border= "2px solid blue";
container.style.display = "flex";
container.style.justifyContent = "space-around";
// container.style.alignContent = "flex-start";
container.style.flexGrow = "flex-start";

const box1 = document.createElement('div');
container.appendChild(box1);
box1.classList.add('box');
box1.classList.add('box1');

const box2 = document.createElement('div');
container.appendChild(box2);
box2.classList.add('box');
box2.classList.add('box2');
box2.style.flexGrow = "2";
box2.style.alignSelf = "center";
box2.style.order = "-1";

const box3 = document.createElement('div');
container.appendChild(box3);
box3.classList.add('box');
box3.classList.add('box3');

const boxes = document.querySelectorAll('.box');

boxes.forEach(items=>{
    items.style.height = "100px";
    items.style.width = "100px";
    items.style.border = "3px solid black";
    items.style.backgroundColor = "red";
});

