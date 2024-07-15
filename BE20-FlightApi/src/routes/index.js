"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  FlightApi | Abdulkadir TARTILACI
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use('/auth', require('./auth'))

// user:
router.use('/users', require('./user'))

// flights:
router.use('/flights', require('./flight'))


// document:
router.use('/documents', require('./documents'))

/* ------------------------------------------------------- */
module.exports = router