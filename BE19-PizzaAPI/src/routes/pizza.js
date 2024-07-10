"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const pizza = require("../controllers/pizza");
const idValidation = require("../middlewares/idValidation");
const {isAdmin} = require("../middlewares/permissions")

//* /pizzas
router.route("/").get(pizza.list).post(isAdmin,pizza.create);

router
  .route("/:id")
  .all(idValidation)
  .get(pizza.read)
  .put(isAdmin, pizza.update)
  .patch(isAdmin, pizza.update)
  .delete(isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router