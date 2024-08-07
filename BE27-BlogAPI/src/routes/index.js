"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
// router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user.route'))
// token:
router.use('/tokens', require('./token.route'))



/* ------------------------------------------------------- */
module.exports = router