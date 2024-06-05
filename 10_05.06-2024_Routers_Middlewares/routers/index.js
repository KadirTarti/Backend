'use strict'

/* ----------------------------------- */
//^         EXPRESSJS - ROUTING        */
/* ----------------------------------- */


const abc = require('express').Router()


abc.get("/", (req, res) => {
    res.send({ message: "Hallo Welt123456" });
  });

  module.exports = abc