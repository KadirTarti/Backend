"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const order = require("../controllers/order");
const idValidation = require("../middlewares/idValidation");
const permission = require('../middlewares/permissions')

//* /orders
router.route("/")
.get(permission.isLogin, order.list)
.post(permission.isLogin, order.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, order.read)
  .put(permission.isAdmin, order.update)
  .patch(permission.isAdmin, order.update)
  .delete(permission.isAdmin, order.delete);

/* ------------------------------------------------------- */
module.exports = router