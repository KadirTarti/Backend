"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use('/auth', require('./auth.route'))
// user:
router.use('/users', require('./user.route'))
// token:
router.use('/tokens', require('./token.route'))
// category
router.use('/categories', require('./category.route'))
// blog
router.use('/blogs', require('./blog.route'))
// comment
router.use('/comments', require('./comment.route'))
// document
router.use('/documents', require('./document.route'))





/* ------------------------------------------------------- */
module.exports = router