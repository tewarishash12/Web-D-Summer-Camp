const express = require('express');
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Init
const students = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Tom', age: 21 },
];

app.set('view engine', 'ejs');

app.use(express.static('public')); // folder name

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/students', (req, res) => {
    res.render('students', { title: 'Students', students });
});

// calling by using id function
function getStudentById(id){
    return students.find(s=> s.id==id);
}

//Incase any invalid id is entered undefined is printed

// calling by using name function
function getStudentByName(name){
    return students.find(s=> s.name==name);
}


//Calling functions by id
app.get('/students/id/:id', (req,res)=>{
    const id_from_path_variable = req.params.id;
    console.log(`id entered in variable ${id_from_path_variable}`);
    console.log(typeof id_from_path_variable); // this returns string as the data is converted into string when we call it 

    const intId = parseInt(id_from_path_variable);
    console.log(typeof intId);
    const studentObj = getStudentById(intId);
    if(!studentObj)
        res.status(404).send('Error 404! Data requested not found');
    else{
        console.log(studentObj);
        console.log(`${studentObj}`); // Property of ES6+ notations 
        res.send(studentObj);
    }
});

//Calling functions by name

app.get('/students/name/:name', (req,res)=>{
    const name_from_path_variable = req.params.name;
    console.log(`id entered in variable ${name_from_path_variable}`)

    const studentObjName = getStudentByName(name_from_path_variable);
    if(!studentObjName)
        res.status(404).send('Error 404! Data requested not found');
    else{
        console.log(studentObjName);
        res.send(studentObjName);
    }
    
});

app.get('/student/query', (req,res)=>{
    const keyFromQueryParam = req.query.name;
    console.log(keyFromQueryParam);
    const nameParam = getStudentByName(keyFromQueryParam);
    res.send(nameParam);
});

// {id: 1, name:"John", age: 20}
// 1. create function that creates a new student
function addStudent(student){
    students.push(student);
}

// 2. Create a POST API which reads the body and console.log it
app.use(express.json());
app.post('/student',(req,res)=>{
    const obj = req.body;
    console.log(obj);
    addStudent(obj);
    res.send('The data has been send');
});

function deleteStudentById(id){
    const index = students.findIndex(s=> s.id==id);
    if(index ==-1)
        return;
    students.splice(index,1);
}

app.delete('/students/id/:id', (req,res)=>{
    const id = req.params.id;
    const intId = parseInt(id);
    deleteStudentById(intId);
    res.send(`The student with ${intId} has been deleted`);
})