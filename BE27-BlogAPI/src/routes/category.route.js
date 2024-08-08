"use strict"
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/category:

const permissions = require('../middlewares/permissions')
const category = require('../controllers/category.controller')

// URL: /categories

router.route('/')
    // .get(permissions.isAdmin, category.list)
    //? category.list içinde isAdmin kontrolü yaptık:
    .get(category.list)
    .post(category.create)

router.route('/:id')
    .get(category.read)
    .put(permissions.isLogin, category.update)
    .patch(permissions.isLogin, category.update)
    .delete(permissions.isAdmin, category.delete)

/* ------------------------------------------------------- */
module.exports = router