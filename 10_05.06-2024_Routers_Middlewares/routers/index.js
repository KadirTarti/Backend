'use strict'

/* ----------------------------------- */
//^         EXPRESSJS - ROUTING        */
/* ----------------------------------- */


const router = require('express').Router()
router.get("/", (req, res) => {
    res.send({ message: "Hallo Welt" });
  });

  module.exports = router