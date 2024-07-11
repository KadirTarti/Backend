"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const User = require("../models/userModel");

module.exports = {
  list: async (req, res) => {
    const users = await res.getModelList(User);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      results: users.length,
      users,
    });
  },
  create: async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).send({
      error: false,
      newUser,
    });
  },
  read: async (req, res) => {
    //   const user = await User.findById(req.params.id)
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    const user = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      user,
      updatedUser: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(user.deletedCount > 0 ? 204 : 404).send({
      error: !user.deletedCount,
      user,
    });
  },
};
