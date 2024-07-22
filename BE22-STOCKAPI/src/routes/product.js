"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
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
  .get(permission.isLogin, product.list)
  .post(permission.isLogin, product.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin,getModel, permission.isAdminOrStaffOrOwn, product.read)
  .put(permission.isLoginStaffOrAdmin, product.update)
  .patch(permission.isLoginStaffOrAdmin, product.update)
  .delete(permission.isLoginAdmin, product.delete);

module.exports = router;