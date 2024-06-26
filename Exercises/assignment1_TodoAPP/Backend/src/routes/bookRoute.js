// book Route

const router = require('express').Router()

const book=require('../controllers/bookController')

router
    .route('/books')
    .get(book.list)
    .post(book.create);

router
    .route('/books/:id')
    .get(book.list)
    .put(book.update)
    .delete(book.delete)

    
module.exports = router;
