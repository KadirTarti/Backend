"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const PizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    // image: {
    //   type: String,
    //   trim: true,
    // },
    //^array içine alınca bişrden fazla veri(image) ekleyebileceğiz:
    image: [{
      type: String,
      trim: true,
    }],
    price: {
      type: Number,
      required: true,
    },
    // toppingIds: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Topping",
    // }, //* Many to One

    
    toppingIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ], //* Many to Many
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);


module.exports = mongoose.model("Pizza",PizzaSchema)