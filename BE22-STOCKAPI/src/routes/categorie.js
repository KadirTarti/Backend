"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /categories

const categorie = require("../controllers/categorie");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yolcu silme işlemini Admin yapabilir.
const getModel = (req,res,next)=>{
  req.model = categorie;
  next()  
}

router
  .route("/")
  .get( categorie.list)
  .post( categorie.create);

router
  .route("/:id")
  .all(idValidation)
  .get(categorie.read)
  .put(categorie.update)
  .patch(categorie.update)
  .delete(categorie.delete);

module.exports = router;