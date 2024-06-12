"use strict";
const Contact = require('../models/contactModel')

module.exports = {
  list: async (req, res) => {
    const data = await Contact.findAndCountAll()
    res.status(200).send({
      error: false,
      contacts: data
    })
  },
  create: async (req, res) => {
    const data = await Contact.create(req.bod)
    res.status(201).send({
      error: false,
      contact: data
    })
  },
  get: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
