const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const cartSchema=new Schema({

    name:{
        type: String
    },

    description:{
        type: String
    },

    price:{
        type: Number,
        default:0
    },

    category:{
        type:String
    },

    from:{
        type:String
    },

    state:{
        type: String
    },

    discount:{
        type:Number,
        default: 0
    }
}, {timestamps:true})


const Cart=mongoose.model('Cart',cartSchema);
module.exports=Cart;
