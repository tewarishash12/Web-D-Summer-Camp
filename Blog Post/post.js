const body = document.body;
body.style.width = "1px solid black";

const container1 = document.createElement('div');
body.appendChild(container1);
container1.style.border ="1px solid black";
container1.style.borderBottom ="none";
container1.style.width = "50vh";
container1.style.paddingLeft = "10px";

const heading = document.createElement('h1')
container1.appendChild(heading);
heading.innerHTML = "Add a new Blog Post";

const title = document.createElement('input');
container1.appendChild(title);
title.id = "head";
document.getElementById('head').placeholder = "Title";

const br1 = document.createElement('br');
container1.appendChild(br1);
const br2 = document.createElement('br');
container1.appendChild(br2);

const context = document.createElement('textarea');
container1.appendChild(context);
context.id = "c1";
document.getElementById('c1').placeholder = "Content";

context.style.height = "70px";
context.style.width = "200px";

const br3 = document.createElement('br');
container1.appendChild(br3);
const br4 = document.createElement('br');
container1.appendChild(br4);

const addPost = document.createElement('input');
container1.appendChild(addPost);
addPost.id = "addPost";
document.getElementById('addPost').type = "Submit";
document.getElementById('addPost').value = "Add Post";


const subheading1 = document.createElement('h2');
container1.appendChild(subheading1);
subheading1.innerHTML = "Blog Posts";

const subheading2 = document.createElement('h3');
container1.appendChild(subheading2);
subheading2.innerHTML = "Post-2";

const paratext1 = document.createElement('p');
container1.appendChild(paratext1);
paratext1.innerHTML = "Posted on: Wednesday, July 24, 2024";
paratext1.style.color = "gray";

const paratext2 = document.createElement('p');
container1.appendChild(paratext2);
paratext2.innerHTML = "This is newest Post";

const container2 = document.createElement('div');
body.appendChild(container2);
container2.style.border ="1px solid black";
container2.style.width = "50vh";
container2.style.paddingLeft = "10px";

const subheading3 = document.createElement('h3');
container2.appendChild(subheading3);
subheading3.innerHTML = "Post-1";

const paratext3 = document.createElement('p');
container2.appendChild(paratext3);
paratext3.innerHTML = "Posted on: Wednesday, July 24, 2024";
paratext3.style.color = "gray";

const paratext4 = document.createElement('p');
container2.appendChild(paratext4);
paratext4.innerHTML = "This is newest Post";
