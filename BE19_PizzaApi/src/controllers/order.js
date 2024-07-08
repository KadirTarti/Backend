"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Order = require("../models/order");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Order);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      data,
    });
  },
  //! CRUD(Create-Read-Update-Delete)
  create: async (req, res) => {
    // delete req.body.amount - amount alanını db ye eklememek için
    const data = await Order.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Order.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    // delete req.body.amount - amount alanını db ye eklememek için. amount hesaplaması getters ile yapıyoruz
    const data = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      newData: await Order.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Order.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
      message: "Order not found!",
    });
  },
};
