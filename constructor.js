class Todo{
    constructor(title, description, status){
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

let todos = [
    new Todo("Grocery Shopping", "Buy milk, eggs, and bread", "Not Done"),
    new Todo("Workout", "Go for a 30-minute run", "Done"),
    new Todo("Study", "Complete JavaScript tutorial", "Not Done"),
    new Todo("Laundry", "Wash and fold clothes", "Done"),
    new Todo("Cook Dinner", "Prepare pasta and salad", "Not Done")
];

// todos.forEach((todo)=>{
//     console.log(`title:${todo.title}, description:${todo.description}`);
// });

// todos.forEach((todo)=>{
//     console.log(`title:${todo.title}, description:${todo.status}`);
// });

const title =todos.map((todo)=>{
    return `${todo.title}`;
});

// console.log(title);

// const done = todos.filter((todo)=>{
//     return todo.status==='Done'
// }).map((todo)=>{ 
//         return todo.title;
// });

// console.log(done);

const notDone = todos.filter((todo)=>{
    return todo.status === 'Not Done'
}).map((todo)=>{
    return todo.title;
})
console.log(notDone);