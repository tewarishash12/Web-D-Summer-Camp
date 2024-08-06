const body = document.body;

const div = document.createElement('div');
body.appendChild(div);
div.innerHTML = "w3resource";

let data = div.innerHTML;

setInterval(() => {
    data = data.substring(1) + data.substring(0,1);
    div.innerHTML = data;
}, 100);