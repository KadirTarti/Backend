"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /firms

const Firm = require("../controllers/firm");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* Login olan kullanıcılar delete hariç tüm işlemleri yapabilecek. 
//? Listeleme işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
//! Update işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
// Delete işlemini sadece Admin yapabilir.
const getModel = (req, res, next) => {
  req.model = Firm;
  next();
};
router.use(permission.isLogin)

router.route("/").get(Firm.list).post(Firm.create);

router
  .route("/:id")
  .all(idValidation)
  .get(getModel, permission.isAdminOrStaffOrOwn, Firm.read)
  .put(getModel, permission.isAdminOrStaffOrOwn, Firm.update)
  .patch(getModel, permission.isAdminOrStaffOrOwn, Firm.update)
  .delete(permission.isAdmin, Firm.delete);

module.exports = router;