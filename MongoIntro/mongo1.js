const mongoose = require('mongoose');
const userName = `tshash`;
const password = `tewarishash12`;
const database = `product`;


const dbURI = `mongodb+srv://${userName}:${password}@merncluster0.fq4t0.mongodb.net/${database}?retryWrites=true&w=majority&appName=mernCluster0`

mongoose.connect(dbURI)
.then((result)=>{
    console.log('Post connected to database');
})
.catch((err)=>{
    console.log('Error in this page');
});

const Schema = mongoose.Schema;

const laptopSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    inStock: {type: Boolean, required: true}
});

const Laptop = mongoose.model('device', laptopSchema, 'laptops');

// const newLaptop = new Laptop({
//     name: "HP",
//     price: 70000,
//     inStock: true
// })

// newLaptop.save()
// .then((result)=>{
//     console.log('Blog page has been saved')
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("Error saving the page")
//     console.log(err.message)
// })

// Laptop.find()
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log('Error!! cannot be displayed ')
// })

// Laptop.find({name:'Dell'})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// Laptop.findByIdAndUpdate('66bb739608060376a9a90a99', {name:'Acer', new:true})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// Laptop.findOneAndUpdate({name:'Acer'}, {name:'Asus', new:true})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// Laptop.findByIdAndDelete('66bb739ba74578ec824fee96')
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err.message);
// })



setTimeout(()=>{
    mongoose.connection.close();
}, 1000)