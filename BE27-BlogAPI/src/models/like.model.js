"use strict"
/* -------------------------------------------------------
    AKT - commentAPI
------------------------------------------------------- */

const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Like', likeSchema);