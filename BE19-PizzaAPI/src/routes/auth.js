"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const auth = require('../controllers/auth')


//*    /auth


router.post("/login",auth.login)

router.get("/logout",auth.logout)

/* ------------------------------------------------------- */
module.exports = router