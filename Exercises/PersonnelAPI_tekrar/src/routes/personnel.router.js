"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const personnel = require("../controllers/personnel.controller");
const idValidation = require("../middlewares/idValidation");
// const permission = require('../middlewares/permissions')

//* url:  /personnels
router.route("/").get(personnel.list).post(personnel.create);

router
  .route("/:id")
  .all(idValidation)
  .get(personnel.read)
  .put(personnel.update)
  .patch(personnel.update)
  .delete(personnel.delete);



  /* ------------------------------------------------------- */
module.exports = router;
