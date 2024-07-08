"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

//*    /auth

const auth = require('../controllers/auth')

router.post('/login', auth.login)

module.exports = router