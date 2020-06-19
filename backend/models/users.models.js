const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    user_type:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true
    },
},
    {
        timestamps: true,

    });
module.exports = mongoose.model('logins',UserSchema);
