"use strict"
/* -------------------------------------------------------

/* ------------------------------------------------------- */

const router = require('express').Router()


// URL: /

// auth:
router.use('/auth', require('./auth'))
// cars:
router.use('/cars', require('./car'))
// documents:
router.use('/documents', require('./document'))
// reservations:
router.use('/reservations', require('./reservation'))
// tokens:
router.use('/tokens', require('./token'))
// users:
router.use('/users', require('./user'))

/* ------------------------------------------------------- */
module.exports = router;