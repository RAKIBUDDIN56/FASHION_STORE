const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CustomerReg = new Schema({
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type: String,
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
            required: true,
            trim:true,
            minlength: 8
        },

        mobile:{
            type: Number,
            required:true
        },
    },
    {
        timestamps: true,

    });



const Customer = mongoose.model('CustomerReg',CustomerReg);
module.exports= Customer;
