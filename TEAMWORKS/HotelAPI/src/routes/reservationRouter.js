"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();
const reservation = require("../controllers/reservationController");
const permissions = require("../middlewares/permissions");
const idValidation = require("../middlewares/idValidation");

/* ------------------------------------------------------- */

router
  .route("/")
  .get(permissions.isAdmin, reservation.list)
  .post(reservation.create);
router
  .route("/:id")
  .all(idValidation)
  .get(reservation.read)
  .put(reservation.update)
  .patch(reservation.update)
  .delete(reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
