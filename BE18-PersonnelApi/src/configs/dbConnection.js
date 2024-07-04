"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')


const dbConnection = function() {
    // Connect:
    console.log(process.env.MONGODB)
    mongoose.connect('mongodb://127.0.0.1:27017/personnelAPI')
    // mongoose.connect('mongodb+srv://abdulkadir:1234@localhost:27017/personelAPI/admin)
    // mongoose.connect('mongodb+srv://[tarti:1234@]localhost:27017[personnelAPI]')
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 



