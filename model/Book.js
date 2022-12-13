const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    reviews:[reviewSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)
