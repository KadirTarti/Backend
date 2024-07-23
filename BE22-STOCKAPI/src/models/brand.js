"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "brands",
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", BrandSchema);
