"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /reservations

const reservation = require("../controllers/reservation");
const idValidation = require("../middlewares/idValidation");

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .all(idValidation)
  .get(reservation.read)
  .put(reservation.update)
  .patch(reservation.update)
  .delete(reservation.delete);

module.exports = router;