"use strict"
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/category.controller')

// URL: /users

router.route('/')
    // .get(permissions.isAdmin, user.list)
    //? user.list içinde isAdmin kontrolü yaptık:
    .get(user.list)
    .post(user.create)

router.route('/:id')
    .get(user.read)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin, user.update)
    .delete(permissions.isAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router