"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const pizza = require("../controllers/pizza");
const idValidation = require("../middlewares/idValidation");

//* /pizzas
router.route("/").get(pizza.list).post(pizza.create);

router
  .route("/:id")
  .all(idValidation)
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);

/* ------------------------------------------------------- */
module.exports = router