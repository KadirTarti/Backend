"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isPublish": false
}
/* ------------------------------------------------------- */
// Car Model:

const CarSchema = new mongoose.Schema({

    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    plateNumber:{
        type: String,
    },
    brand:{
        type: String,

    },
    model:{
        type: String,

    },
    year:{
        type: Number,

    },
    isAutomatic:{
        type: Boole
    },
    pricePerDay:{},
    isPublish:{},
    createdId:{
        type: mongoose.Schema.Types.ObjectId
    },
    updatedId:{
        type: mongoose.Schema.Types.ObjectId

    }

}, { collection: 'cars', timestamps: true })