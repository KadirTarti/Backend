"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },
    size:{
        type:String,
        trim:true,
        required:true,
        enum:["Small","Medium","Large","Xlarge"]
    },
    quantity: {
        type: Number,
        default:1,
        validate: (quantity) => quantity > 0
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
    }

  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order",OrderSchema)