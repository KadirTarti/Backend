"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
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
      set: (password)=> passwordEncrypt(password)
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
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
