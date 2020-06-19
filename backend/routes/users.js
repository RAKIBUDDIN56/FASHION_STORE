const express = require('express');
const router = require('express').Router();
const User = require('../Models/users.models');

router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const user_type = "Store Manager";
    const email= req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        first_name,
        last_name,
        user_type,
        email,
        username,
        password

    });

    newUser.save()
        .then(() => res.json('New Store manager added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Selected Store Manager deleted.'))
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

            User.save()
                .then(() => res.json('Selected Store Manager updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
