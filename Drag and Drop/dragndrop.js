const body = document.body;

// Create and append the first draggable box
const box1 = document.createElement('div');
body.appendChild(box1);
box1.className = "box";
box1.id = 'box1';
box1.innerHTML = "Box 1";

// Create and append the second draggable box
const box2 = document.createElement('div');
body.appendChild(box2);
box2.className = "box";
box2.id = 'box2';
box2.innerHTML = "Box 2";

// Create the container for drop areas
const container = document.createElement('div');
body.appendChild(container);
container.style.display = "flex";
container.style.gap = "10px";

// Create and append the first drop area
const dragbox1 = document.createElement('div');
container.appendChild(dragbox1);
dragbox1.className = "drag";
dragbox1.id = 'drag1';

// Create and append the second drop area
const dragbox2 = document.createElement('div');
container.appendChild(dragbox2);
dragbox2.className = "drag";
dragbox2.id = 'drag2';

// Style the draggable boxes
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.style.width = "80px";
    box.style.height = "80px";
    box.style.backgroundColor = "cyan";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.draggable = "true";
});

// Style the drop areas
const storeBox = document.querySelectorAll('.drag');
storeBox.forEach((box) => {
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.border = "2px dotted black";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.innerHTML = "Drop Here";
});

// Add dragstart event listeners to draggable boxes
const draggables = document.querySelectorAll('.box');
draggables.forEach((eve) => {
    eve.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

// Add dragover and drop event listeners to drop areas
const dropArea = document.querySelectorAll('.drag');
dropArea.forEach((eve) => {
    eve.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    eve.style.display='flex';

    eve.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const dragEle = document.getElementById(id); // Use the variable `id` correctly
        eve.appendChild(dragEle); // Append to the specific drop area
        eve.style.justifyContent='center';
        eve.style.alignSelf='center';
    });
});
