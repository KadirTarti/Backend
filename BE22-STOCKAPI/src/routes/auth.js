"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  StockApi | Abdulkadir TARTILACI
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const auth = require("../controllers/auth")

//* /auth

router.post("/login",auth.login)

router.post("/refresh",auth.refresh)

router.get("/logout",auth.logout)

/* ------------------------------------------------------- */
module.exports = router