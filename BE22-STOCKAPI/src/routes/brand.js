"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /brands

const brand = require("../controllers/brand");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");


//* Login olan herkes uçuşları listeleyebilir.
//! Staff yada Admin olan post,put,patch işlemlerini yapabilir.
//? sadece admin delete işlemini yapabilir.

router
  .route("/")
  .get(permission.isLogin, brand.list)
  .post(brand.create);

router
  .route("/:id")
  .all(idValidation)
  .get(
    // permission.isLogin, 
    brand.read)
  .put(
    // permission.isLoginStaffOrAdmin, 
    brand.update)
  .patch(
    // permission.isLoginStaffOrAdmin, 
    brand.update)
  .delete(
    // permission.isLoginAdmin, 
    brand.delete);
module.exports = router;