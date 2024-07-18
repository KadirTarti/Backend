"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const car = require('../controllers.car')

const permissions = require('../middlewares/permissions')

//URL:  'cars'

router.route('/')
    .get(permissions.isAdmin, car.list)
    .post(permissions.isStaffOrisAdmin, car.create)

router.route('/:id')
    .get(permissions.isLogin, car.read)
    .put(permissions.isLogin, car.update)
    .patch(permissions.isLogin, car.update)
    .delete(permissions.isStaffOrisAdmin, car.delete)


/* ------------------------------------------------------- */
module.exports = router

module.exports = router