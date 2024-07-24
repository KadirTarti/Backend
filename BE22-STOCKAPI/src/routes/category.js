"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /categories

const category = require("../controllers/category");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yolcu silme işlemini Admin yapabilir.
const getModel = (req,res,next)=>{
  req.model = category;
  next()  
}

router
  .route("/")
  .get( category.list)
  .post( category.create);

router
  .route("/:id")
  .all(idValidation)
  .get(category.read)
  .put(category.update)
  .patch(category.update)
  .delete(category.delete);

module.exports = router;