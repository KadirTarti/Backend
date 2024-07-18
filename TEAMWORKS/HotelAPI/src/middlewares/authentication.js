"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

// app.use(authentication);

/* -------------------------------------------------------------------------- */
const Token = require("../models/tokenModel");
const jwt = require("jsonwebtoken");

/* -------------------------------------------------------------------------- */
module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization;
  const tokenKey = auth ? auth.split(" ") : null;

  // SimpleToken: \\
  // if (tokenKey && tokenKey[0] == "Token") {
  //   const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
  //     "userId"
  //   );
  //   req.user = tokenData ? tokenData.userId : False;
  //   // console.log(tokenData);
  // }
  // SimpleToken: \\

  // JWT TOKEN \\
  if (tokenKey[0] == "Bearer") {
    //* JWT access token:
    jwt.verify(
      tokenKey[1],
      process.env.ACCESS_KEY,
      function (error, accessData) {
        if (accessData) {
          console.log("JWT verified");
          req.user = accessData;
        } else {
          console.log("JWT not verified!");
          req.user = false;
          console.log(error);
        }
      }
    );
  }

  next();
};
