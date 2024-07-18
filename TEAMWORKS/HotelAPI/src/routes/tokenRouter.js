"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const token = require("../controllers/tokenController");
const idValidation = require("../middlewares/idValidation");

router.route("/").get(token.list).post(token.create);
router
  .route("/:id")
  .all(idValidation)
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);

/* ------------------------------------------------------- */
module.exports = router;
