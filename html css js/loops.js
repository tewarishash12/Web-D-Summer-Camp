let i=5;

// function inc(num){
//     return num+1;
// }

// for(i;i<10;i=inc(i)){
//     console.log(i);
// }

// const arr= [1,2,3,4,5];
// for(i=0;i<arr.length;i=inc(i)){
//     console.log(arr[i]);
// }

// i=0;

// while(i<10){
//     console.log(`loop is on ${i}`);
//     i++;
// }

const todo = [
    {
        id: 1,
        text:"coding",
        isCompleted: true
    },
    {
        id: 2,
        text:"reading",
        isCompleted: false
    },
    {
        id: 1,
        text:"cycling",
        isCompleted: true
    },
];

// todo.forEach(function(todo){
//     console.log(`Task: ${todo.text}, Status: ${todo.isCompleted}`)
// })

// const status = todo.forEach(item => ({
//     return (`Task: ${todo.text}, Status: ${todo.isCompleted}`);
// }))

const year = 1972;

// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log(`${year} is a leap year`);
//         }else{
//             console.log(`${year} is not a leap year`);
//         }
//     } else{
//         console.log(`${year} is a leap year`);
//     }
// }
// else
// console.log(`${year} is not a leap year`);


if(year%4===0 && year%100==0 && year%400===0)
    console.log(`${year} is a leap year`);
else if(year%4===0 && year%100!==0)
    console.log(`${year} is a leap year`);
else
    console.log(`${year} is not a leap year`);
