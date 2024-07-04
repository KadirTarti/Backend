"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: Strimg,
        trim: true,
        required: true,
        unique: true
    },
}, {
    timestamps: true,
    collection: 'departments'
})

module.exports = mongoose.model('Department', DepartmentSchema)