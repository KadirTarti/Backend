"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  StockApi | Abdulkadir TARTILACI
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /


// auth:
router.use('/auth', require('./auth'))
// brands:
// router.use('/brands', require('./brand'))
// // categories:
// router.use('/categories', require('./categorie'))
// // firms:
// router.use('/firms', require('./firm'))
// document:
router.use('/documents', require('./documents'))
// products:
// router.use('/products', require('./product'))
// // purchases:
// router.use('/purchases', require('./purchase'))
// // products:
// router.use('/products', require('./product'))
// // sales:
// router.use('/sales', require('./sale'))
// // tokens:
// router.use('/tokens', require('./token'))
// users:
router.use('/users', require('./user'))


/* ------------------------------------------------------- */
module.exports = router;