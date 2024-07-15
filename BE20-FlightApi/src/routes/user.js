"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../controllers/user");
const idValidation = require("../middlewares/idValidation");

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
