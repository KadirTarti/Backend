"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const RoomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      trim: true,
      //   unique: true,
    },
    bedType: {
      type: String,
      trim: true,
      required: true,
      enum: ["Small Bed", "Medium Bed", "Large Bed"],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", RoomSchema);
