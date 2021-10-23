const mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    family: String,
    category: String,
    subcategory: String,
    name: String,
    author: String,
    source: String,
    ID: String
})

module.exports = Book
