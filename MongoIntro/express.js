const express = require('express');
// const studentRoutes = require('./routes/studentRoutes');

// 1. Create an express app
const app = express();
const port = 3040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Index Route
app.get('/', (req,res)=>{
    res.send('Home Page');
})

const studentRoutes = require('./routes/studentRoutes');

app.use('/students', studentRoutes);

// Default Route
app.use((req, res) => {
    res.status(404).send("404 Page Not Found");
});