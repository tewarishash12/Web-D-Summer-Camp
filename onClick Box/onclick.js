const body = document.body;

body.style.backgroundColor = "black";
body.style.height = "100vh";

body.addEventListener('click', ()=>{
    const container = document.createElement('div');
    body.appendChild(container);
    
    container.innerHTML = "Shashwat Tewari";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.border = "2px solid red"
    container.style.height = "130px";
    container.style.width = "130px";
    container.style.backgroundColor = "white";
    container.style.position = "absolute";
    container.style.top = `${event.clientY}px`;
    container.style.left = `${event.clientX}px`;
});