"use strict";
/* -------------------------------------------------------
EXPRESS - HOTEL API
------------------------------------------------------- */
const router = require("express").Router();

// auth:
router.use("/auth", require("./authRouter"));
// user:
router.use("/users", require("./userRouter"));
// token:
// router.use("/tokens", require("./tokenRouter"));
// room:
router.use("/rooms", require("./roomRouter"));
// reservation:
router.use("/reservations", require("./reservationRouter"));
// document:
router.use("/documents", require("./documents"));

/*------------------------------------------------------- */
module.exports = router;
