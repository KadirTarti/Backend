"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const department = require("../controllers/department.controller");
const idValidation = require("../middlewares/idValidation");

//* URL : /departments

router.route("/").get(department.list).post(department.create);

router.route("/:id/personnels").get(department.personnels);//* departmana göre personel listeleme

router
  .route("/:id")
  .all(idValidation)
  .get(department.read)
  .put(department.update)
  .patch(department.update)
  .delete(department.delete);

/* ------------------------------------------------------- */
module.exports = router;
