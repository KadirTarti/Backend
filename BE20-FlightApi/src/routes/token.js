"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const token = require("../controllers/token");
const idValidation = require("../middlewares/idValidation");
const {isLoginAdmin} = require("../middlewares/permissions");

router.use(isLoginAdmin);

//* /tokens
router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .all(idValidation)
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);


/* ------------------------------------------------------- */
module.exports = router