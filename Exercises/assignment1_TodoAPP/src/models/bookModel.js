// Book Models

const mongoose = require('mongoose')

const bookPostSchema = new mongoose.Schema(
    {
        title,
        author,
        ISBN,
        genre,
        publicationYear,
        image,
        createdAt,
        updatedAt,
        
    }
)