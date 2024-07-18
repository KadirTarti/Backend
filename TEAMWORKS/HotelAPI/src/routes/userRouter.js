"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../controllers/userController");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

router.route("/").get(permission.isAdmin, user.list).post(user.create);

router
  .route("/:id")
  .all(idValidation, permission.isLogin)
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

/* ------------------------------------------------------- */
module.exports = router;
