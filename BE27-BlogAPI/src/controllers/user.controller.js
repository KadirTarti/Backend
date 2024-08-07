"use strict";
/* -------------------------------------------------------
    EXPRESS - User API
------------------------------------------------------- */

const User = require("../models/user.model");
const Token = require('../models/token.model')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(User,{},"userId");
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(User),
      data,
    });
  },
  create: async (req, res) => {
    const isStuff = req.body?.isStuff || false;
    let message = "Yeni personel eklendi."
    if (isStuff) {
      const isUpdated = await User.updateMany(
        {
          userId: req.body.userId,
          isLead: true,
        },
        { isLead: false }
      );
      console.log(isUpdated)
      if (isUpdated.modifiedCount) {
        message = "Önceki Stuff kaldırıldı.Yeni personel eklendi.";
      }
    }//* Her takımın tek bir lideri olmak zorunda

    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      data,
      message
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    if(!req.user.isAdmin) {
      req.body.isAdmin = false;
      delete req.body.isLead
      delete req.body.salary
      delete req.body.title
      delete req.body.startedAt
      delete req.body.isActive
    }
    const isLead = req.body?.isLead || false;
    if (isLead) {
      const { departmentId } = await User.findOne({ _id: req.params.id });
      console.log(departmentId);
      await User.updateMany(
        {
          departmentId,
          isLead: true,
        },
        { : false }
      );
    }
    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true, //* modelde var olan validate fonksiyonlarının(built-in ve custom) update işlemi sırasında çalışmasını sağlayan özellik ***
    });
    res.status(202).send({
      error: false,
      data,
      newData: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount > 0 ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
