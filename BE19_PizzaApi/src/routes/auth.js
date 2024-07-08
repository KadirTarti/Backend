"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const auth = require("../controllers/auth")

//* /auth

router.post("/login",auth.login)

router.get("/logout",auth.logout)

/* ------------------------------------------------------- */
module.exports = router