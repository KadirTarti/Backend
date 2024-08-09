"use strict"
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/blog:

const permissions = require('../middlewares/permissions')
const blog = require('../controllers/blog.controller')

// URL: /categories

router.route('/')
    // .get(permissions.isAdmin, blog.list)
    //? blog.list içinde isAdmin kontrolü yaptık:
    .get(permissions.isLogin, blog.list)
    .post(permissions.isLogin, blog.create)

router.route('/:id')
    .get(permissions.isLogin, blog.read)
    .put(permissions.isLogin, blog.update)
    .patch(permissions.isLogin, blog.update)
    .delete(permissions.isAdmin, blog.delete)

router.route('/:id/getLike')
    .get(permissions.isLogin, blog.list)

router.route('/:id/postLike')
    .post(permissions.isLogin, blog.create)

/* ------------------------------------------------------- */
module.exports = router