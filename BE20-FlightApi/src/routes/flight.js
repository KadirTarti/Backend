"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /flights

const flight = require("../controllers/flight");
const idValidation = require("../middlewares/idValidation");

router.route("/").get(flight.list).post(flight.create);

router
  .route("/:id")
  .all(idValidation)
  .get(flight.read)
  .put(flight.update)
  .patch(flight.update)
  .delete(flight.delete);

module.exports = router;