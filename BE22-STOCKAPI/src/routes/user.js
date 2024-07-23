"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../controllers/user");
const User = require("../models/user");
const idValidation = require("../middlewares/idValidation");
const upload = require("../middlewares/upload")
const permission = require("../middlewares/permissions")

const getModel = (req, res, next) => {
  req.model = User;
  next();
};


//* /users
router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .all(idValidation)
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

/* ------------------------------------------------------- */
module.exports = router;
