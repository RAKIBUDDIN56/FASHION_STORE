const express=require('express');
const app=express();

const cors=require('cors');
const mongoose=require('mongoose');


require('dotenv').config();
const port=process.env.PORT || 5000;
const url=process.env.ATLAS_URL;
//course middleware
app.use(cors());
app.use(express.json());

//const uri="mongodb+srv://user123:pass@cluster0.udmfl.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',() =>{
  console.log("Mongo db database connection established successfully");
});

const loginRouter=require('./routes/login');
const productRouter=require('./routes/product');
const categoryRouter=require('./routes/category');
const cartRouter=require('./routes/cart');

const userRoutes=require('./Routes/users');
const categoryRoutes =require('./Routes/categories');
const registerRoutes =require('./Routes/register');

app.use('/users',userRoutes);
app.use('/categories',categoryRoutes);
app.use('/register',registerRoutes);

app.use('/login',loginRouter);
app.use('/product',productRouter);
app.use('/category',categoryRouter);
app.use('/cart',cartRouter);

//start server
app.listen(port,() =>{
  console.log('Server is running on port '+port)
});
