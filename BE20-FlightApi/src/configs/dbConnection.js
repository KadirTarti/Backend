"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  FlightApi | Abdulkadir TARTILACI
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')

const dbConnection = function() {
    // Connect:
    mongoose.connect(process.env.MONGODBURL)
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 