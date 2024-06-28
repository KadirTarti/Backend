'use strict';
const mongoose = require('mongoose')

const mongooseConnection = async () => {
    try {
        if(!process.env.MONGODB_URI) throw new Error ('MongoDB URI is required')
            await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected')
    } catch (error) {
        throw new Error ('MongoDB connection is failed!')
    }
}

module.exports = {mongooseConnection}