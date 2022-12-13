const express = require('express')
const router = express.Router()
const bookController = require('../controllers/books_controller')
const reviewController = require('../controllers/reviews_controller')

router.route('/')
    .get(bookController.getAllBooks)
    .delete(bookController.deleteAllBooksById)
    .post(bookController.createBook)

router.route('/:id')
    .get(bookController.getABook)
    .post((req,res)=>{
        res.status(501).send({"reply": "not work"})
    })
    .put(bookController.updateBookById)
    .delete(bookController.deleteBook)

router.route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReview)
    .put((req, res) => res.status(501).json({'reply':'Not implemented'}))
    .delete(reviewController.deleteAllReviews)

router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewById)
    .post((req, res) => res.status(501).json({'reply':'Not implemented'}))
    .put(reviewController.updateReviewById)
    .delete(reviewController.deleteReviewById)

module.exports = router;