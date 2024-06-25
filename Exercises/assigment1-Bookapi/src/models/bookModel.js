//* book Model

const { DataTypes } = require('sequelize')
const {sequelize} = require('../configs/db')

const Book = sequelize.define(
    'books',{
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull:true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        genre: {
            type: DataTypes.TEXT,
        },
        publicationYear: {
            type: DataTypes.INTEGER,
            defaultValue: true
        },
    }, {
        timestamps: true,
    }

)

module.exports = Book
// sequelize.sync()

// User.sync() //- bir kerelik çalıştırır
// User.sync({ force: true }) //- tabloyu düşürüp yeniden çalıştırır
// User.sync({ alter: true }) // - mevcut tabloyu günceller
