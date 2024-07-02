"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */



const router = require("express").Router();


//! ana index.js'teki tüm route'ları burada topladık, orayı rahatlatmak için !

router.use("/departments", require("./src/routes/department.router"));

router.use("/personnels", require("./src/routes/personnel.router"));

router.use('/tokens', require('./src/routes/token.router'))



module.exports= router