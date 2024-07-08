"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const order = require("../controllers/order");
const idValidation = require("../middlewares/idValidation");

//* /orders
router.route("/").get(order.list).post(order.create);

router
  .route("/:id")
  .all(idValidation)
  .get(order.read)
  .put(order.update)
  .patch(order.update)
  .delete(order.delete);

/* ------------------------------------------------------- */
module.exports = router