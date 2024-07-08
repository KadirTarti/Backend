"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

//* transform kullanımı
// const OrderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     pizzaId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Pizza",
//       required: true,
//     },
//     size: {
//       type: String,
//       trim: true,
//       required: true,
//       enum: ["Small", "Medium", "Large", "Xlarge"],
//     },
//     quantity: {
//       type: Number,
//       default: 1,
//       validate: (quantity) => quantity > 0,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       default: function () {
//         return this.quantity * this.price;
//       },//* create de problem yok sağlıklı çalışıyor
//       transform: function () {
//         return this.quantity * this.price;
//       },//* dönüştürme işlemi gerçekleşirken çalışır
//     },
//   },
//   {
//     collection: "orders",
//     timestamps: true,
//   }
// );

//* getters kullanımı
// const OrderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     pizzaId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Pizza",
//       required: true,
//     },
//     size: {
//       type: String,
//       trim: true,
//       required: true,
//       enum: ["Small", "Medium", "Large", "Xlarge"],
//     },
//     quantity: {
//       type: Number,
//       default: 1,
//       validate: (quantity) => quantity > 0,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       get: function(){return this.quantity * this.price}
//     },
//   },
//   {
//     collection: "orders",
//     timestamps: true,
//     toJSON: { getters: true },
//   }
// );
//! amount verisini db de saklamadan sadece ve sadece veri okuması yapılırken amount alanı hesaplanarak dönen veriye dinamik olarak eklensin. Bu yöntem de db de amount alanı olmayacak o nedenle amount a göre filtreleme yapamayız. Ve getters/transform her istekte çalışacağı için db de verinin fazla olduğu durumlarda performans sorunu yaşanabilir. Dikkatli kullanılması gereken bir metot.
//* pre middleware
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
    size: {
      type: String,
      trim: true,
      required: true,
      enum: ["Small", "Medium", "Large", "Xlarge"],
    },
    quantity: {
      type: Number,
      default: 1,
      validate: (quantity) => quantity > 0,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);


module.exports = mongoose.model("Order",OrderSchema)