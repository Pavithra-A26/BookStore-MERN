const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:Email,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',UserSchema);