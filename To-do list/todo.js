const body = document.body;

const heading = document.createElement('h1');


const container = document.createElement('div');
body.appendChild(container);

container.style.height = "60vh";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";
container.style.border = "3px solid black";

// Input Task
const content = document.createElement('div');
container.appendChild(content);

const inputField = document.createElement('input');
content.appendChild(inputField);
inputField.id = "tasks";
tasks.placeholder = "Enter your tasks here";
inputField.style.border = "2px solid blue";
inputField.style.borderRadius = "5px";
inputField.style.height = "30px";
inputField.style.width = "300px";
inputField.style.fontSize = "20px";



//Add Task button
const addBtn = document.createElement('input');
content.appendChild(addBtn);
addBtn.id = "add";
add.type = "Submit";
add.value = "Add Task";
addBtn.style.borderRadius = "5px";
addBtn.style.height = "35px";
addBtn.style.fontSize = "20px";


//Unordered List Created
const listElement = document.createElement('ul');
container.appendChild(listElement);
listElement.id = 'taskEntered';


//Functioning by click element
addBtn.addEventListener('click', function(){
    const task = document.getElementById('tasks');
    const taskValue = task.value.trim();

    if(taskValue===""){
        alert("The task entered is Empty");
        return;
    }

    const li = document.createElement('li');
    listElement.appendChild(li);
    li.className = 'li';
    // li styling
    li.style.display = "flex";
    li.style.justifyContent= "space-between" 
    li.style.listStyleType = "none";
    li.style.height = "28px";
    li.style.width = "390px";
    li.style.fontSize = "20px";
    li.style.borderRadius = "5px";
    li.style.marginBottom = "10px"
    li.style.backgroundColor = "orange";
    
    
    li.innerHTML = taskValue;
    
    const remove = document.createElement('input');
    li.appendChild(remove);
    remove.classList.add("del");
    remove.type = "Submit";
    remove.value = "Delete";
    remove.style.borderRadius = "5px";

    remove.addEventListener('click', function(){
        listElement.removeChild(li);
    });

    task.value ="";
});

