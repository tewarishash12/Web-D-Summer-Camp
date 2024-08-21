const mongoose = require('mongoose');
const userName = `mongo2`;
const password = `tewarishash12`;
const database = `questions`;


const dbURI = `mongodb+srv://${userName}:${password}@merncluster0.fq4t0.mongodb.net/${database}?retryWrites=true&w=majority&appName=mernCluster0`

mongoose.connect(dbURI)
.then((result)=>{
    console.log("Database connected to user");
})
.catch((err)=>{
    console.log(err.message);
});

const Schema = mongoose.Schema;

const userCollection = new Schema({
    username: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true}
});

const userData = mongoose.model('users', userCollection, 'userData');

// const data = new userData({
//     username: "ansh_gupta",
//     email: "anshGup@gmail.com",
//     age: 21
// });

// data.save()
// .then((result)=>{
//     console.log('Data has been uploaded');
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// userData.find({email:'tewarishashwat@gmail.com'})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// });

userData.findByIdAndDelete('66bb8d674df49e9cbbaf7aa8')
.then((result)=>{
    console.log('Data has been deleted');
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
})

userData.findOneAndDelete({username: 'ansh_gupta'})
.then((result)=>{
    console.log('Age has been updated');
})
.catch((err)=>{
    console.log(err.message);
})


setTimeout(()=>{
    mongoose.connection.close();
},10000)
