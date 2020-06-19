const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const loginSchema=new Schema({

    usertype:{
        type: String
    },

    username:{
        type: String,
        unique:true
    },

    password:{
        type: String
    }
}, {timestamps:true})


const Login=mongoose.model('Login',loginSchema);
module.exports=Login;
