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
  .get(permission.isLogin, categorie.list)
  .post(permission.isLogin, categorie.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin,getModel, permission.isAdminOrStaffOrOwn, categorie.read)
  .put(permission.isLoginStaffOrAdmin, categorie.update)
  .patch(permission.isLoginStaffOrAdmin, categorie.update)
  .delete(permission.isLoginAdmin, categorie.delete);

module.exports = router;