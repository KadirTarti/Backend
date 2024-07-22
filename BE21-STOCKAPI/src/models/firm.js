"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const FirmsSchema = new mongoose.Schema(
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
    collection: "reservations",
    timestamps: false,
  }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
