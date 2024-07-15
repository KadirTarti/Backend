"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  FlightApi | Abdulkadir TARTILACI
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const ReservationSchema = new mongoose.Schema(
  {
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
    passengers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passenger',
        required: true,
    }],
    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
  },
  {
    collection: "reservations",
    timestamps: false,
  }
);

module.exports = mongoose.model("Reservation",ReservationSchema);