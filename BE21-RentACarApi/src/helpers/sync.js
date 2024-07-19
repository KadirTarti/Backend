"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function() {

    return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    /*
     await User.create({
        username: "admin",
        password: "aA?123456",
        email: "admin@site.com",
        firstName: "admin",
        lastName: "admin",
        isActive: true,
        isStaff: true,
        isAdmin: true
    })
    console.log('- Admin user created.')

    await User.create({
        username: "staff",
        password: "aA?123456",
        email: "staff@site.com",
        firstName: "staff",
        lastName: "staff",
        isActive: true,
        isStaff: true,
        isAdmin: false
    })
    console.log('- Staff user created.')

    await User.create({
        username: "user",
        password: "aA?123456",
        email: "user@site.com",
        firstName: "user",
        lastName: "user",
        isActive: true,
        isStaff: false,
        isAdmin: false
    })
    console.log('- User created.')

      await Car.create({
        plateNumber: "34ABC1236",
        brand: "Opel",
        model: "Astra",
        year: 2024,
        isAutomatic: true,
        pricePerDay: 249.99
    })
    console.log('- Ford Car created.')
    */

}