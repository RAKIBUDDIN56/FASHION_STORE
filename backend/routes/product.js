const router=require('express').Router();
let Product=require('../models/product.model');
const multer = require('multer');

//const upload=multer({dest:'./../src/image'});

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'./../src/image');
    },
    filename:function (req,file,cb) {
        cb(null,  file.originalname);
    }
});

const fileFilter=(req,file,cb) => {
    if(file.mimetype === 'image/jpeg'||file.mimetype==='image/png'){
        cb(null,true);
    }else {
        cb(new Error('only jpg/png',false));
    }
};

const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5
    },
    fileFilter:fileFilter
});

router.route('/').get((req,res) =>{
  Product.find()
    .then(product =>res.json(product))
    .catch(err =>res.status(400).json('Error')+err)
});

router.route('/add').post(upload.single('image'),(req,res) =>{
  const name=req.body.name;
  const description=req.body.description;
  const price=req.body.price;
  const category=req.body.category;
  const from=req.body.from;
  const state=req.body.state;
  const discount=req.body.discount;
  const image=req.file.filename;

  const newproduct = new Product({
      name,
      description,
      price,
      category,
      from,
      state,
      discount,
      image

  });



  newproduct.save()
      .then(() => res.json('Product added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) =>{
  Product.findById(req.params.id)
      .then(product =>res.json(product))
      .catch(err =>res.status(400).json('Error')+err)
});



router.route('/update/:id').post((req,res) =>{
  Product.findById(req.params.id)
      .then(product => {
        product.discount = req.body.discount;

        product.save()
            .then(() => res.json('Product updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error')+err)
});

module.exports=router;


