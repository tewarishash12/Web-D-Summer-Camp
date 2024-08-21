const userName = 'shashtewari';
const password = 'tewarishash12';
const database = 'mernDB'
const mongoose = require('mongoose');


const dbURI = `mongodb+srv://${userName}:${password}@merncluster0.fq4t0.mongodb.net/${database}?retryWrites=true&w=majority&appName=mernCluster0`;

mongoose.connect(dbURI)
.then((result)=>{
    console.log('Post connected to database');
})
.catch((err)=>{
    console.log(err);
})

console.log('Post connecting to DB');

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
}, {timestamps: true});

const BlogPost = mongoose.model('blog', blogPostSchema, 'blogposts');

//CRUD operations

// const newBlog = new BlogPost({
//     title: 'First Post',
//     summary: 'Summary',
//     content: 'Content',
//     author: 'Shashwat Tewari'
// });

// newBlog.save()
//     .then((result)=>{
//     console.log("Saving the blog Page");
//     console.log(result);
// })
//     .catch((err)=>{
//     console.log("Error saving the blog post")
//     console.log(err.message);
// })



// BlogPost.findById('66bb29102367d689a8ae9124')
// .then((result) =>{
//     console.log("All data are printed");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("Error fetching the blog data")
// })

BlogPost.findByIdAndUpdate('66bb29102367d689a8ae9124', {title:"Updated Title", new:true})
.then((result)=>{
    console.log("The id has been deleted")
    console.log(result);
})
.catch((err)=>{
    console.log("Error deleting the data");
});

// BlogPost.findByIdAndDelete('66bb2e35fceecc618fa43512')
// .then((result)=>{
//     console.log("The id has been deleted")
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("Error deleting the data");
// })

setTimeout(() => {
    mongoose.connection.close();
}, 10000);