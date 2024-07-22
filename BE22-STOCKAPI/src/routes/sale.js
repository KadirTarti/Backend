"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /sales

const sale = require("../controllers/sale");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* login olan kullanıcı kendi yolcularını görüntüleyebilir, yolcu oluşturabilir.
//? Yolcu editleme işlemini staff yada Admin yapabilir.
//! Yolcu silme işlemini Admin yapabilir.
const getModel = (req,res,next)=>{
  req.model = sale;
  next()  
}

router
  .route("/")
  .get(permission.isLogin, sale.list)
  .post(permission.isLogin, sale.create);

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin,getModel, permission.isAdminOrStaffOrOwn, sale.read)
  .put(permission.isLoginStaffOrAdmin, sale.update)
  .patch(permission.isLoginStaffOrAdmin, sale.update)
  .delete(permission.isLoginAdmin, sale.delete);

module.exports = router;