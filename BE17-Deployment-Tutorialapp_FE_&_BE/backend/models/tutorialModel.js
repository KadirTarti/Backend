"use strict";
const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection:"tutorial",
    timestamps:false
  }
);

const Tutorial = mongoose.model("Tutorial",tutorialSchema)

module.exports = Tutorial;