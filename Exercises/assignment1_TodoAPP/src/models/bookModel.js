// Book Models

const {sequelize,DataTypes}=require('../configs/connectDB')
const Book=sequelize.define('books',{

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


module.exports= Book