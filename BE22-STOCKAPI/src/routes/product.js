"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /products

const product = require("../controllers/product");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yolcu silme işlemini Admin yapabilir.
const getModel = (req,res,next)=>{
  req.model = product;
  next()  
}

router
  .route("/")
  .get(product.list)
  .post(product.create);

router
  .route("/:id")
  .all(idValidation)
  .get(product.read)
  .put(product.update)
  .patch(product.update)
  .delete(product.delete);

module.exports = router;