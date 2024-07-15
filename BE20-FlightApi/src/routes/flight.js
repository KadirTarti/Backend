"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /flights

const flight = require("../controllers/flight");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");


//* Login olan herkes uçuşları listeleyebilir.
//! Staff yada Admin olan post,put,patch işlemlerini yapabilir.
//? sadece admin delete işlemini yapabilir.

router
  .route("/")
  .get(permission.isLogin, flight.list)
  .post(permission.isStaffOrAdmin, flight.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, flight.read)
  .put(permission.isStaffOrAdmin, flight.update)
  .patch(permission.isStaffOrAdmin, flight.update)
  .delete(permission.isAdmin, flight.delete);

module.exports = router;
