const express = require('express')
const categoryController = require('../controllers/category_controller')


const router = express.Router()

router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory)
    .put((req,res) => res.status(501).json({"reply": "Not implemented"}))
    .delete()

router.route('/:category_id')
    .get(categoryController.getCategoryById)
    .post((req,res) => res.status(501).json({"reply": "Not implemented"}))
    .put(categoryController.updateCategoryById)
    .delete(categoryController.deleteCategoryById)

module.exports = router