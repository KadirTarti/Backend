"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();

const room = require('../controllers/roomController')
const idValidation = require("../middlewares/idValidation");

//^ "/rooms"

router.route("/").get(room.list).post(room.create);
router
  .route("/:id")
  .all(idValidation)
  .get(room.read)
  .put(room.update)
  .patch(room.update)
  .delete(room.delete);

/* ------------------------------------------------------- */
module.exports = router;
