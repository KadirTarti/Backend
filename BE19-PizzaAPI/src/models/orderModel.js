"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */

const OrderSchema = new mongoose.Schema({
    UserId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    PizzaId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza',
        required: true
    },
    size: {
        type: String,
        trim: true,
        required: true,
    },
    quantity: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: true,
    },
    amount: {
        type: String,
        trim: true,
        required: true,
    },
}, 
{
    collection: 'order',
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema)