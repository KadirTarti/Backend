"use strict"
/* -------------------------------------------------------
    AKT - BlogAPI
------------------------------------------------------- */
// SYCHRONIZATION:

module.exports = async function() {

    // return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */
    
    /* Department & User */
    const Department = require('../models/department.model')
    const User = require('../models/user.model')
    const departments = [
        "FullStack Department",
        "DevOps Department",
        "CyberSec Department",
    ]
    departments.forEach(value => {
        // Department.create:
        Department.create({ name: value }).then((department) => {
            console.log('- Department Added.')
            // User.create:
            for (let i in [...Array(10)]) {
                User.create({
                    username: "test" + (value[0] + i),
                    password: "1234",
                    email: "test" + (value[0] + i) + "@site.com",
                    firstName: "firstName",
                    lastName: "lastName",
                    isActive: true,
                    isStaff: false,
                    isAdmin: false,
                                    })
            }
            console.log('- Users Added.')
        })
    })
    /* Department & User */
    console.log("Synchronized")
}

