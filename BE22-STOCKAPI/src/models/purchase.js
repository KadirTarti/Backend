"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const PurchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    firmId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Firm',
      required: true
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    priceTotal: {
      type: Number,
      required: true
    }    
  },
  {
    collection: "purchases",
    timestamps: true,
  }
);

module.exports = mongoose.model("Purchase",PurchaseSchema)
