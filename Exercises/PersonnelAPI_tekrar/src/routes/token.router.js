"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const token = require("../controllers/token.controller");
const idValidation = require("../middlewares/idValidation");

//* URL : /tokens 

router.route("/").get(permission.isAdmin, token.list).post(permission.isAdmin, token.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isAdmin, token.read)
  .put(permission.isAdmin, token.update)
  .patch(permission.isAdmin, token.update)
  .delete(permission.isAdmin, token.delete);

/* ------------------------------------------------------- */
module.exports = router;
