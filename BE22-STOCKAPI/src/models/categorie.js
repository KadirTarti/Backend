"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Abdulkadir Tartilaci
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const CategorieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

module.exports = mongoose.model("Categorie", CategorieSchema);
