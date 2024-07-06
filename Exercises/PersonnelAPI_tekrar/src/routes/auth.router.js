"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const auth = require("../controllers/auth.controller")

// URL => /auth

router.post("/login", auth.login)
// // router.all("/logout", auth.logout) // swagger .all metodunu görmez
// router.get("/logout", auth.logout)

// // error handler, if no route has been caught
// router.get("/*", function(req, res){ res.send("404 not found"); res.end();});
// router.post("/*", function(req, res){ res.send("404 not found"); res.end();});

module.exports = router