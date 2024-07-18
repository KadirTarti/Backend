"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const Room = require("../models/roomModel");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "List Rooms"
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
    const rooms = await res.getModelList(Room);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Room),
      results: rooms.length,
      rooms,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Create Room"
        */
    const newRoom = await Room.create(req.body);
    res.status(201).send({
      error: false,
      newRoom,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Get Single Room"
        */
    // const rooms = await Room.findOne({_id:req.params.id})
    const room = await Room.findById(req.params.id); // mongoose arka planda findOne methodunu calistirir.
    res.status(200).send({
      error: false,
      room,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Update Room"
        */
    const room = await Room.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      room,
      updatedRoom: await Room.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Rooms"]
            #swagger.summary = "Delete Room"
        */
    const room = await Room.deleteOne({ _id: req.params.id });
    res.status(room.deletedCount > 0 ? 204 : 404).send({
      error: !room.deletedCount,
      room,
    });
  },
};
