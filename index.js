// const date_fns = require('date-fns')
// const uuid = require('uuid')

// console.log(new Date())
// console.log(uuid.v4())
// console.log(date_fns.format(new Date(), 'yyy/MM/dd\tHH:mm:ss'))
// console.log("hello world")

// // save log events
// // string message
// // store message into a text file
// // user id datetime message


const express = require('express')
const logger = require('./logger')
const path = require('path')
const book_router = require('./routes/books-router')
const category_router = require('./routes/category-routes')

const app = express()
const port  = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/books-29b')
    .then(() => {
        console.log('connected')
        app.listen(port, () => {
            console.log(`App is running on port: ${port}`)
})
    }).catch((err) => console.log(err))
    
// Logger
//1. Application based middleware
app.use((req,res,next) => {
    console.log(`${req.method} ${req.path}`)
    logger.log(`${req.method}\t${req.path}`)
    next()
})

//2. Express defined middleware

app.use(express.json())

// Homepage
app.get('^/$|/index(.html)?', (req, res) => {
    // res.send("Hello world")
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//3. Router level middleware
app.use('/books', book_router)
app.use('/category', category_router)


//4. Error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({"err": err.message})
})
