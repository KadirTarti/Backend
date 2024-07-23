"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const { CustomError } = require("../errors/customError");
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
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isStaff: {
      type: Boolean,
      default: false,
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

//* create işleminde çalışacak
UserSchema.pre("validate", function (next) {
  console.log(this.password);
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
      this.password
    )
  ) {
    next();
  } else {
    throw new CustomError("Password type is incorrect!", 400);
  }
});

UserSchema.pre("save", function (next) {
  this.password = passwordEncrypt(this.password);
  next();
});

//? update için
const updateEncryptValidatePassword = function (next) {
  const update = this.getUpdate();
  if (update.password) {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
        update.password
      )
    ) {
      update.password = passwordEncrypt(update.password);
    } else {
      throw new CustomError("Password type is incorrect!", 400);
    }
  }

  next();
};

// UserSchema.pre("updateOne", function (next) {
//   const update = this.getUpdate();
//   if (update.password) {
//     if (
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
//         update.password
//       )
//     ) {
//       update.password = passwordEncrypt(update.password);
//     }else {
//       throw new CustomError("Password type is incorrect!", 400);
//     }
//   }

//   next()
// });
UserSchema.pre("updateOne", updateEncryptValidatePassword);

module.exports = mongoose.model("User", UserSchema);
