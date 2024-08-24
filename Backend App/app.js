const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogs');
const cors = require('cors');


const USER_NAME = 'NewBlogs';
const PASSWORD = '1234567890';
const DB_NAME = 'blogsData'

const DB_URI =`mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster0.fq4t0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernCluster0`;

app.use(express.json());

mongoose.connect(DB_URI)
.then((result)=>{
    app.listen(3090, ()=>{
        console.log("Server started on", 'http://localhost:3090/');
    });
})
.catch((err)=>{
    console.log(err.message);
})

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Home Page');
})

app.use('/blogs', blogRoutes);