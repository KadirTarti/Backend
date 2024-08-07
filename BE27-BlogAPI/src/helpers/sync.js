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
    
    /* blog & User */
    const blog = require('../models/blog.model')
    const User = require('../models/user.model')
    const blogs = [
        "Travel blog",
        "News blog",
        "IT blog",
    ]
    blogs.forEach(value => {
        // blog.create:
        blog.create({ name: value }).then((blog) => {
            console.log('- blog Added.')
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
    /* blog & User */
    console.log("Synchronized")
}

