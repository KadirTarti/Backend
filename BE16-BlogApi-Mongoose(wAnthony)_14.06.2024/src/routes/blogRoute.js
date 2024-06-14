//* Blog Route

const router = require('express').Router()

const {BlogPostController} = require('../controllers/blogController')

router.route('/post')
    .get(BlogPostController.list)
    .post(BlogPostController.create)


