"use strict"
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/user.controller')

// URL: /users

router.route('/')
    // .get(permissions.isAdmin, user.list)
    //? user.list içinde isAdmin kontrolü yaptık:
    .get(user.list)
    .post(permissions.isLogin, user.create)

router.route('/:id')
    .get(permissions.isLogin, user.read)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin, user.update)
    .delete(permissions.isAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router