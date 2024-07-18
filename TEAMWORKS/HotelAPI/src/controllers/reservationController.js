"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const Reservation = require("../models/reservationModel");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Orders"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    let customFilter = {};
    if (!req.user.isAdmin) {
      customFilter = { userId: req.user._id };
    }
    const reservations = await res.getModelList(Reservation, customFilter, [
      "userId",
      "roomId",
    ]);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      results: reservations.length,
      reservations,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
        */

    const newReservation = await Reservation.create(req.body);
    res.status(201).send({
      error: false,
      newReservation,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */
    const reservation = await Reservation.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      reservation,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
        */
    const reservation = await Reservation.updateOne(
      { _id: req.params.id },
      req.body,
      { runValidators: true }
    );
    res.status(202).send({
      error: false,
      reservation,
      updatedReservation: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */
    const reservation = await Reservation.deleteOne({ _id: req.params.id });
    res.status(reservation.deletedCount > 0 ? 204 : 404).send({
      error: !reservation.deletedCount,
      reservation,
    });
  },
};
