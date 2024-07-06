"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */



const router = require("express").Router();


//! ana index.js'teki tüm route'ları burada topladık, orayı rahatlatmak için !

// router.use('/auth', require('./auth.router'))

router.use("/departments", require("./department.router"));

// router.use("/documents", require("./documents.router"));

router.use("/personnels", require("./personnel.router"));

router.use('/tokens', require('./token.router'))


module.exports= router