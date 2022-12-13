
const books = require('../data/books')
const Book = require('../model/Book')
const {param} = require('../routes/books-router')

const getAllBooks = (req,res, next)=>{
    Book.find()
        .then((books) => {
            res.json(books)
        }).catch((err) => next(err))
}

const createBook = (req, res, next)=>{
    let book = {
        'title': req.body.title,
        'author': req.body.author
    }
    Book.create(book)
        .then((book) => {
            res.status(201).json(book)
        }).catch(next)
}

const updateBookById = (req, res, next) =>{
//     console.log("new")

//     let updatedBooks = books.map((item)=>{
//         if(item.id == req.params.id){
//             item.title = req.body.title
//         }
//         return item
//     })
//     console.log("new")
//     res.json(updatedBooks)
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then((book) => {
            res.json(book)
        }).catch(next)
}

const deleteAllBooksById = (req, res)=>{
    Book.deleteMany()
    .then((reply) => {
        res.json(reply)
    }).catch(next)
}

const getABook = (req,res, next)=>{
    Book.findById(req.params.id)
        .then((book) => {
            res.json(book)
        }).catch(next)
}

const deleteBook = (req, res, next) =>{
//    let newlist =  books.filter((item) => {
//         return item.id != req.params.id
//     }) 

//     res.json(newlist)
    Book.findByIdAndDelete(req.params.id)
        .then((reply) => {
            res.json(reply)
        }).catch(next)

}
module.exports = {
    getABook,
    getAllBooks,
    updateBookById,
    createBook,
    deleteAllBooksById,
    deleteBook
}

