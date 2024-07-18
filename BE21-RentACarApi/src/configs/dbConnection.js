"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')

const dbConnection = function() {
    // Connect:
    mongoose.connect('mongodb://127.0.0.1:27017/RentACarApi')
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 