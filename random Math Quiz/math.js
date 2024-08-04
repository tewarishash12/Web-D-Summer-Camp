const body = document.body;
const op = ['+', '-', '*', '/', '%'];

const container = document.getElementById('container');
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.flexDirection = "column";


for(let i = 0; i < 5; i++) {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10 + 1);
    let num3 = Math.floor(Math.random() * 5);

    const newQuestion = document.createElement('div');
    container.appendChild(newQuestion);
    newQuestion.classList.add('ques');
    newQuestion.innerHTML = `<p>${i + 1}. What is the answer of ${num1} ${op[num3]} ${num2}?</p>`;

    let ans0 = eval(num1 + op[num3] + num2);
    let ans1 = ans0.toFixed(2) + Math.floor(Math.random() * 10) + 1; // Randomly generate different options
    let ans2 = ans0.toFixed(2) - (Math.floor(Math.random() * 10) + 1);
    let ans3 = ans0.toFixed(2) + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);

    let answers = [ans0, ans1, ans2, ans3];
    answers = answers.sort(() => Math.random() - 0.5); // Shuffle the answers

    for(let j = 0; j < 4; j++) {
        let opt = document.createElement('input');
        opt.type = "radio";
        opt.name = `question${i}`;
        opt.value = answers[j];
        newQuestion.appendChild(opt);

        let label = document.createElement('label');
        label.innerHTML = `${answers[j]}`;
        newQuestion.appendChild(label);

        newQuestion.appendChild(document.createElement('br'));
    }
}

const buttons = document.createElement('div');
container.appendChild(buttons);

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.classList.add('btn');
btn2.classList.add('btn');

buttons.appendChild(btn1);
buttons.appendChild(btn2);

const btn = document.querySelectorAll('.btn');

btn.forEach(b=>{
    b.style.height = "5vh";
    b.style.width = "15vw";
    b.style.backgroundColor = "lightblue";
    b.style.margin = "10px"
});

btn1.innerHTML = "Submit";
btn2.innerHTML = "Reset Form";