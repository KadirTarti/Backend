"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
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
    collection: "Categories",
    timestamps: true,
  }
);

module.exports = mongoose.model("Categorie", CategorieSchema);
