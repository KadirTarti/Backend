"use strict"
/* -------------------------------------------------------
    AKT - categoryAPI
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const CategorySchema = new mongoose.Schema({
    
    name: {
        type: String,
        trim: true,
        required: true,  
    },
}, 
{
    collection: 'category',
    timestamps: true
})

module.exports = mongoose.model('Category', CategorySchema)