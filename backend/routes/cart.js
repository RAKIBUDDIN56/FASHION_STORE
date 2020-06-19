
const router=require('express').Router();
let Cart=require('../models/cart.model');

router.route('/').get((req,res) =>{
    Cart.find()
        .then(cart =>res.json(cart))
        .catch(err =>res.status(400).json('Error')+err)
});

router.route('/addCart').post((req,res) =>{
    const name=req.body.name;
    const description=req.body.description;
    const price=req.body.price;
    const category=req.body.category;
    const from=req.body.from;
    const state=req.body.state;
    const discount=req.body.discount;
    const newCart = new Cart({name,description,price,category,from,state,discount});

    newCart.save()
        .then(() => res.json('Cart added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) =>{
    Cart.findById(req.params.id)
        .then(cart =>res.json(cart))
        .catch(err =>res.status(400).json('Error')+err)
});

router.route('/:id').delete((req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) =>{
    Cart.findById(req.params.id)
        .then(cart => {
            cart.discount = req.body.discount;

            cart.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error')+err)
});

module.exports=router;


