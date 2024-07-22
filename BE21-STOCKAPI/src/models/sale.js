"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const SaleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sale',
      required: true
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      enum: [null, "M", "F"],
      default: null,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      index:true,
      unique: [true, "Email already exists! Email field must be unique!"],
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email type is not correct.",
      ],
    },
    createdId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
  },
  {
    collection: "Sales",
    timestamps: true,
  }
);

module.exports = mongoose.model("Sales",SaleSchema);