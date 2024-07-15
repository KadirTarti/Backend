"use strict";

const { CustomError } = require("../errors/customError");

/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user && req.user.isActive) {
      next();
    } else {
      throw new CustomError("NoPerimission: You must login.", 403);
    }
  },
  isStaffOrAdmin: (req, res, next) => {
    if (
      req.user &&
      req.user.isActive &&
      (req.user.isStaff || req.user.isAdmin)
    ) {
      next();
    } else {
      throw new CustomError(
        "NoPerimission: You must login and to be Staff or Admin.",
        403
      );
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isActive && req.user.isAdmin) {
      next();
    } else {
      throw new CustomError(
        "NoPerimission: You must login and to be Admin.",
        403
      );
    }
  },
};
