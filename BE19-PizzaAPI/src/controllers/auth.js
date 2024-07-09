"use strict";
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */

const User = require("../models/user");
const Token = require("../models/token");
const { CustomError } = require("../errors/customError");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const jwt = require('jsonwebtoken')

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;

    if (password && (username || email)) {
      // const user = await User.findOne({username,email}) //* and operatörü
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (user && user.password == passwordEncrypt(password)) {
        if (user.isActive) {
          
          //? simple token
          let tokenData = await Token.findOne({ userId: user._id });
          if (!tokenData) {
            tokenData = await Token.create({
              userId: user._id,
              token: passwordEncrypt(user._id + Date.now()),
            });
          };
          //? simple token


          //& jwt
          // accessToken
          const accessInfo = {
            key: process.env.ACCESS_KEY || '134325vmcqd-*...',
            time: process.env.ACCESS_EXP || "5m",
            data: {
              _id: user._id,
              id: user._id,
              username: user.username,
              email: user.email,
              password: user.password,
              isActive:user.isActive,
              isAdmin:user.isAdmin
            }
          };

          // refreshtoken
          const refreshInfo = {
            key: process.env.REFRESH_KEY ||'12345qazwxs-*09',
            time: process.env.REFRESH_EXP || "30m",
            data: {
              _id: user._id,
              id: user._id,
              password: user.password,
            },
          };

          //* jwt.sign(data, secret_key, options)
          const accessToken = jwt.sign(accessInfo.data, accessInfo.key, {expiresIn: accessInfo.time})
          const refreshToken = jwt.sign(refreshInfo.data, refreshInfo.key, {expiresIn: refreshInfo.time})
          
          
          
          res.status(200).send({
            error: false,
            bearer: {
              acces: accessToken,
              refresh: refreshToken,
            },
            token: tokenData.token,
            user,
          });
          //& jwt

        } else {
          throw new CustomError("This account is inactive!", 401);
        }
      } else {
        throw new CustomError("Wrong username/email or password!", 401);
      }
    } else {
      throw new CustomError("Please enter username/email and password!", 401);
    }
  },
  logout: async (req, res) => {
    const auth = req.headers?.authorization;
    const tokenKey = auth ? auth.split(" ") : null;

    let deleted = null;
    if (tokenKey && tokenKey[0] == "Token") {
      deleted = await Token.deleteOne({ token: tokenKey[1] });
    }

    res.status(deleted?.deletedCount > 0 ? 200 : 400).send({
      error: !deleted?.deletedCount,
      deleted,
      message: deleted?.deletedCount > 0 ? "Logout Ok" : "Logout Failed",
    });
  },
};
