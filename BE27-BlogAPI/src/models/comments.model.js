"use strict"
/* -------------------------------------------------------
    AKT - commentAPI
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */

const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
        unique: true, 
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
        index: true,
        unique: true,
    },
    comment: {
        type: String,
        trim: true,
        required: true,
    },
}, 
{
    collection: 'comment',
    timestamps: true
})

module.exports = mongoose.model('Comment', CommentSchema)