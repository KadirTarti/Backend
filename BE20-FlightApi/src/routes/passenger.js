"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /passengers

const passenger = require("../controllers/passenger");
const idValidation = require("../middlewares/idValidation");
const permission = require('../middlewares/permissions')

router.route("/").get(permission.isLogin, passenger.list).post(permission.isLogin, passenger.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, passenger.read)
  .put(permission.isStaffOrAdmin, passenger.update)
  .patch(permission.isStaffOrAdmin, passenger.update)
  .delete(permission.isAdmin, passenger.delete);

module.exports = router;