"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const PersonelSchema = new mongoose.Schema({
    departmentId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true    // username ile de sisteme giriş yapması için unique denilebilir
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set:(password)=> passwordEncrypt(password)
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: ttrue,
        validate: (email) => email.includes('@') && email.includes()
    }

}, 
{
    collection: 'personel',
    timestamps: true
})