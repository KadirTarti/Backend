"use strict";
const { sequelize } = require("../configs/db");
const Book = require("../models/bookModel");
// const sequelize=require('../configs/db')

module.exports = {
  list: async (req, res, next) => {
    // const data = await sequelize.query('SELECT * FROM contacts')
    // const data = await Contact.findAndCountAll(); //! ORM
    // const data = await Contact.findAll(); //! ORM
    try{
    const data = await Book.findAll({
      where: {
        ISBN: true,
      },
    });
    console.log(data)
    res.status(200).send({
      error: false,
      books: data,
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
    const { title, image, author, ISBN, genre, publicationYear } = req.body;
    const data = await sequelize.query(
      "INSERT INTO contacts (firstName, lastName, email, phone, address, createdAt, updatedAt, isActive) VALUES (?,?,?,?,?,?,?,?)",
      {
        replacements: [
          title, image, author, ISBN, genre, publicationYear
        ],
      }
    );
    res.status(201).send({
      error: false,
      book: data,
    });
  },
  get: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
