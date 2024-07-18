"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const validator = require("validator");
const passwordEncrypt = require("../helpers/passwordEncrypt");

/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      //   set: (password) => {
      //     if (
      //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
      //         password
      //       )
      //     ) {
      //       return passwordEncrypt(password);
      //     } else {
      //       throw new CustomError("Password type is incorrect", 400);
      //     }
      //   },
      // },
      set: function (password) {
        if (validator.isStrongPassword(password)) {
          return passwordEncrypt(password);
        } else {
          throw new CustomError("Password type is incorrect", 400);
        }
      },
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      // validate: [
      //     (email) => email.includes("@") && email.split("@")[1].includes("."),
      //     "Email is invalid!",
      // ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
