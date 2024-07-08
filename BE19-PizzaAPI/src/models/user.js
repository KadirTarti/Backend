"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
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
        validate: (email) => email.includes('@') && email.includes()
    },
    
    isActive: {
        type: Boolean,
        default: true
    },
}, 
{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)