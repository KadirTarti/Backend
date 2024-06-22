// book Route

const router = require('express').Router()

const { BookPostController } = require('../controllers/bookController')

router
    .route('/post')
    .get(BookPostController.list)
    .post(BookPostController.create);

router
    .route('/post/many')
    .post(BookPostController.createMany)
    .delete(BookPostController.deleteMany);

router
    .route('/post/:id')
    .get(BookPostController.read)
    .put(BookPostController.update)
    .delete(BookPostController.delete)

    
module.exports = router;
