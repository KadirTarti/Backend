//* Contact Model

const { DataTypes } = require('sequelize')
const {sequelize} = require('../configs/db')

const Contact = sequelize.define(
    'contacts',{
        firstName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        address: {
            type: DataTypes.TEXT,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }

)

module.exports = Contact
// sequelize.sync()

// User.sync() //- bir kerelik çalıştırır
// User.sync({ force: true }) //- tabloyu düşürüp yeniden çalıştırır
// User.sync({ alter: true }) // - mevcut tabloyu günceller
