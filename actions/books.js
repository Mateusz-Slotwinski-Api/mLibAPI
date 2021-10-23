const Book = require('../database/models/book')

module.exports = {
    async register(req, res) {
        const family = req.body.family
        const category = req.body.category
        const subcategory = req.body.subcategory
        const name = req.body.name
        const author = req.body.author
        const source = req.body.source
        const ID = req.body.ID

        let book
        try {
            book = new Book({ family, category, subcategory, name, author, source, ID})
            await book.save()
        } catch (err) {
            return res.status(422).json({ message:err.message })
        }
        res.status(201).json(book)
        
    },
    async show(req, res) {
        const doc = await Book.find({})
        console.log(doc)
        res.status(200).json(doc)
    },
    async drop(req, res) {
        Book.collection.drop()
        res.sendStatus(204)
    }
}