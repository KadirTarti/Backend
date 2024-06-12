"use strict";
const { sequelize } = require("../configs/db");
const Contact = require("../models/contactModel");
// const sequelize=require('../configs/db')

module.exports = {
  list: async (req, res, next) => {
    // const data = await sequelize.query('SELECT * FROM contacts')
    // const data = await Contact.findAndCountAll(); //! ORM
    // const data = await Contact.findAll(); //! ORM
    try{
    const data = await Contact.findAll({
      where: {
        isActive: true,
      },
    });
    console.log(data)
    res.status(200).send({
      error: false,
      contacts: data,
    });
  } catch {
    throw new Error ('hata fırlattım, yakala!')
    console.log(data)
  }
  },



  create: async (req, res) => {
    // const data = await Contact.create(req.body)
    //^ alttaki uzun kod üstteki create komutu ile aynı işi yapıyor!

    //! eski tip klasik sql sorgusu:
    const { firstName, lastName, email, phone, address } = req.body;
    const data = await sequelize.query(
      "INSERT INTO contacts (firstName, lastName, email, phone, address, createdAt, updatedAt, isActive) VALUES (?,?,?,?,?,?,?,?)",
      {
        replacements: [
          firstName,
          lastName,
          email,
          phone,
          address,
          new Date(),
          new Date(),
          isActive || true,
        ],
      }
    );
    res.status(201).send({
      error: false,
      contact: data,
    });
  },
  get: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
