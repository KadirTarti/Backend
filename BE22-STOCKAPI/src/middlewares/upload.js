"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS |  StockApi | Abdulkadir TARTILACI
------------------------------------------------------- */
//* UPLOAD
//? $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html
// multer module ile "form-data" verileri kabul edebiliriz. Yani dosya yükleme yapılabilir.

const multer = require('multer')

module.exports = multer({
    storage : multer.diskStorage({
        destination: "./uploads",
        filename: function (req,file,returnCallback) {
            returnCallback(null, Date.now()+ "-" + file.originalname)
        }
    })
})