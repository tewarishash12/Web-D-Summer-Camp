const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserData = new Schema({
    username:{type:String, required:true, unique:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true, lowercase:true},
    password:{type:String, required:true}
})

const User = mongoose.model('Users', UserData, 'userInput');

module.exports = User;
