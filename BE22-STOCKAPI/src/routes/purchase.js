"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /purchases

const purchase = require("../controllers/purchase");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yolcu silme işlemini Admin yapabilir.
const getModel = (req,res,next)=>{
  req.model = purchase;
  next()  
}

router
  .route("/")
  .get(permission.isLogin, purchase.list)
  .post(permission.isLogin, purchase.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin,getModel, permission.isAdminOrStaffOrOwn, purchase.read)
  .put(permission.isLoginStaffOrAdmin, purchase.update)
  .patch(permission.isLoginStaffOrAdmin, purchase.update)
  .delete(permission.isLoginAdmin, purchase.delete);

module.exports = router;