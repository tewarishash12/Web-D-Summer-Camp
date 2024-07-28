const body = document.body;
const quizData = [
    {
        ques: "What is the capital of England?",
        options: ['London', 'Paris', 'Berlin'],
        correct: 'a'
    },
    {
        ques: "What is the currency of Japan?",
        options: ['Pound', 'Yen', 'Dollars'],
        correct: 'b'
    }
];

const container = document.createElement('form');
body.appendChild(container);

quizData.forEach((item,index)=>{
    const quizDiv = document.createElement('div');
    quizDiv.className = "ques";
    container.appendChild(quizDiv);

    const quesText = document.createElement('p');
    quesText.textContent = `${index+1}. ${item.ques}`;
    quizDiv.appendChild(quesText);
    
    items.options.forEach((option)=>{
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.name
        radio.value
        radio.type 
    })
});