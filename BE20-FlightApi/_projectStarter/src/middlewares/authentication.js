"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization;
  const tokenKey = auth ? auth.split(" ") : null;

  if (tokenKey) {
    //* Simple Token
    if (tokenKey[0] == "Token") {
      //* "Token asdaırhıawerasd...""
      const tokenData = await Token.findOne({
        token: tokenKey[1],
      }).populate("userId");
      req.user = tokenData ? tokenData.userId : false;
    } else if (tokenKey[0] == "Bearer") {
      //* JWT:

      jwt.verify(
        tokenKey[1],
        process.env.ACCESS_KEY,
        function (error, accessData) {
          if (accessData) {
            console.log("JWT verified");
            req.user = accessData;
          } else {
            console.log("JWT not verified");
            req.user = false;
            console.log(error);
          }
        }
      );
    }
  }

  next();
};
