const router = require('express').Router();
const Category = require('../Models/categories.models');

router.route('/').get((req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const categoryLabel = req.body.categoryLabel;

    const newCategory = new Category({
        categoryLabel,
    });

    newCategory.save()
        .then(() => res.json('New Category added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then(Category => res.json(Category))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('Category deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Category.findById(req.params.id)
        .then(Category => {
            Category.categoryLabel = req.body.categoryLabel;

            Category.save()
                .then(() => res.json('Category updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
