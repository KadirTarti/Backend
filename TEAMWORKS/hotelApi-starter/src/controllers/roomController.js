"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

const Room = require("../models/roomModel");

module.exports = {
  list: async (req, res) => {
    const Rooms = await res.getModelList(Room);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      results: Rooms.length,
      Rooms,
    });
  },
  create: async (req, res) => {
    const newRoom = await Room.create(req.body);
    res.status(201).send({
      error: false,
      newRoom,
    });
  },
  read: async (req, res) => {
    //   const Room = await Room.findById(req.params.id)
    const Room = await Room.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      Room,
    });
  },
  update: async (req, res) => {
    const Room = await Room.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      Room,
      updatedRoom: await Room.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const Room = await Room.deleteOne({ _id: req.params.id });
    res.status(Room.deletedCount > 0 ? 204 : 404).send({
      error: !Room.deletedCount,
      Room,
    });
  },
};
