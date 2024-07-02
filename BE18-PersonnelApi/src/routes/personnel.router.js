"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const personnel = require("../controllers/personnel.controller");
const idValidation = require("../middlewares/idValidation");
const permission = required('../middlewares/permissions')

//* url:  /personnels
router.route("/").get(permission.isAdmin, personnel.list).post(permission.isAdmin, personnel.create);

router
  .route("/:id")
  .all(idValidation)
  .get(personnel.read)
  .put(personnel.update)
  .patch(personnel.update)
  .delete(permission.isAdmin, personnel.delete);



  /* ------------------------------------------------------- */
module.exports = router;
