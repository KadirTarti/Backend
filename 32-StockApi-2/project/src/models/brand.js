"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Brand Model:

const BrandSchema = new mongoose.Schema({

}, {
    collection: 'brands',
    timestamps: true
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Brand', BrandSchema)