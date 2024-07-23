"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const FirmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
        type: Number,
        trim: true,
        required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    }
  },
  {
    collection: "firms",
    timestamps: true,
  }
);

module.exports = mongoose.model("Firm", FirmSchema);
