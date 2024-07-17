"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const dateToLocaleString = require("../helpers/dateToLocaleString");

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      //IS-AN-001
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    airline: {
      type: String,
      trim: true,
      required: true,
    },
    // departure: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "City",
    //     required:true
    // },
    departure: {
      type: String,
      trim: true,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    // arrival: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "City",
    //     required:true
    // },
    arrival: {
      type: String,
      trim: true,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "flights",
    timestamps: true,
  }
);

FlightSchema.pre("init", function (document) {
  //https://www.w3schools.com/jsref/jsref_tolocalestring.asp
  // console.log(document);
  // document.user = "anthony"
  // document.departureDateStr = document.departureDate.toLocaleString("de-DE", {
  //   dateStyle: "full",
  //   timeStyle: "medium",
  // });
  // document.arrivalDateStr = document.arrivalDate.toLocaleString("de-DE", {
  //   dateStyle: "full",
  //   timeStyle: "medium",
  // });
  document.departureDateStr = dateToLocaleString(
    "de-DE",
    document.departureDate
  );
  document.arrivalDateStr = dateToLocaleString(
    "de-DE",
    document.arrivalDate
  );
  document.__v = undefined
});

module.exports = mongoose.model("Flight",FlightSchema)
