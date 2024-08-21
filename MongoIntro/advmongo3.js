const mongoose = require('mongoose');
const userName = `advancedmongo`;
const password = `tewarishash12`;
const database = `adv`;

const dbURI = `mongodb+srv://${userName}:${password}@merncluster0.fq4t0.mongodb.net/${database}?retryWrites=true&w=majority&appName=mernCluster0`

mongoose.connect(dbURI)
.then((result)=>{
    console.log(`database has been connected`);
})
.catch((err)=>{
    console.log("Database couldn't be connected");
    console.log(err.message);
});

const Schema = mongoose.Schema;

const userCollection = new Schema({
    username: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}
});

const UserRegistration = mongoose.model('users', userCollection, 'userData');

// const data = new UserRegistration({
//     username: "abhi_Bans",
//     email: "abhi_Bans@gmail.com",
//     password: 'jhatu'
// });

// search using first letter
// UserRegistration.find({username: /^A/i})
// .then((result)=>{
//     console.log('Data has been uploaded');
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// Pagination : Skipping first 5 users

UserRegistration.find().limit(5).skip(5) //Skip first 5 users
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
})

setTimeout(() => {
    mongoose.connection.close();
}, 10000);
