"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
      unique: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
      trim: true,
    },
    departureDate: {
      type: Date,
      required: true,
      trim: true,
    },
    guestNumber: {
      type: Number,
      required: true,
    },
    night: {
      type: Number,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      // get: function () {
      //   return this.night * this.price;
      // },
    },
  },
  {
    collection: "reservations",
    timestamps: true,
    // toJSON: { getters: true },
  }
);
ReservationSchema.pre("save", function (next) {
  const oneDay = 24 * 60 * 60 * 1000;

  // Normalize and trim dates, set them to UTC start of the day
  this.arrivalDate = new Date(
    Date.UTC(
      this.arrivalDate.getFullYear(),
      this.arrivalDate.getMonth(),
      this.arrivalDate.getDate()
    )
  );
  this.departureDate = new Date(
    Date.UTC(
      this.departureDate.getFullYear(),
      this.departureDate.getMonth(),
      this.departureDate.getDate()
    )
  );

  // Calculate the number of nights
  this.night = Math.round((this.departureDate - this.arrivalDate) / oneDay);

  next();
});
ReservationSchema.pre("save", function (next) {
  this.totalPrice = this.night * this.price;
  next();
});
ReservationSchema.pre("updateOne", async function (next) {
  // do stuff
  const updateData = this.getUpdate();
  // console.log(updateData);
  let newPrice = updateData.price;
  let newNight = updateData.night;

  if (newPrice || newNight) {
    if (!newPrice || !newNight) {
      const oldData = await this.model.findOne(this.getQuery());
      newPrice = newPrice || oldData.price;
      newNight = newNight || oldData.night;
    }
    this.set({ totalPrice: newPrice * newNight });
  }
  next();
});

module.exports = mongoose.model("Reservation", ReservationSchema);
