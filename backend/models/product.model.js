const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({

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
  },
  image:{
    type: String
  }
}, {timestamps:true})


const Product=mongoose.model('Product',productSchema);
module.exports=Product;
