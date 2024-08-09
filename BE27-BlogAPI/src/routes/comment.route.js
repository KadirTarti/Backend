"use strict"
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/comment:

const permissions = require('../middlewares/permissions')
const comment = require('../controllers/comment.controller')

// URL: /categories

router.route('/')
    // .get(permissions.isAdmin, comment.list)
    //? comment.list içinde isAdmin kontrolü yaptık:
    .get(comment.list)
    .post(permissions.isLogin, comment.create)

router.route('/:id')
    .get(permissions.isLogin, comment.read)
    .put(permissions.isLogin, comment.update)
    .patch(permissions.isLogin, comment.update)
    .delete(permissions.isAdmin, comment.delete)

/* ------------------------------------------------------- */
module.exports = router