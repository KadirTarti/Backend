// Book Models

const mongoose = require('mongoose')

const bookPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        author: {
            type: String,
            trim: true,
            required: true,
        },
        ISBN : {
            type: String,
            trim: true,
            required: true,
        },
        genre: {
            type: String,
            trim: true,
            required: true,
        },
        publicationYear: {
            type: Number,
            required: true,
        },
        image: {
            type: String, // Assuming this will store the URL of the image
            trim: true,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },

    }

)


module.exports = {
    BookPost: mongoose.model("BookPost", bookPostSchema),
  };