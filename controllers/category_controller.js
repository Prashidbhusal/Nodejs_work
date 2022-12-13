const Category = require('../model/Category')

const getAllCategories = (req, res, next) => {
    Category.find()
    .then((categories) => {
        res.json(categories)
    }).catch(next)
}

const createCategory = (req, res, next) => {
    Category.create(req.body)
        .then((category) => {
            res.status(201).json(category)
        }).catch(next)
}

const deleteCategory = (req, res, next) => {
    Category.deleteMany()
        .then(reply => res.json(reply))
        .catch(next)
}

const getCategoryById = (req, res, next) => {
    Category.findById(req.params.category_id)
        .then(category => res.json(category))
        .catch(next)
}

const updateCategoryById = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.category_id, 
        {$set: req.body}, {new:true})
        .then(category => res.json(category))
        .catch(next)
}

const deleteCategoryById = (req, res, next) => {
    Category.findByIdAndDelete(req.params.category_id)
        .then(category => res.json(category))
        .catch(next)
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}