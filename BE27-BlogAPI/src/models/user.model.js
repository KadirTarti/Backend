"use strict"
/* -------------------------------------------------------
    AKT - BlogAPI
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

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
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: (email) => email.includes('@') && email.includes('.')
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
    isActive: {
        type: Boolean,
        default: true
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, 
{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)