const express = require('express');
const router = require('express').Router();
const User = require('../Models/customers.reg.models');

router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const user_type = "Customer";
    const email= req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const mobile = req.body.mobile;

    const newUser = new User({
        first_name,
        last_name,
        user_type,
        email,
        username,
        password,
        mobile


    });

    newUser.save()
        .then(() => res.json('New Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Selected Customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            User.first_name = req.body.first_name;
            User.last_name = req.body.last_name;
            User.user_type = req.body.user_type;
            User.email = req.body.email;
            User.username = req.body.username;
            User.password = req.body.password;
            User.mobile = req.body.mobile;

            User.save()
                .then(() => res.json('Selected Customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
