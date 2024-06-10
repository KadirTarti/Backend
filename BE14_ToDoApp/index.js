'use strict'

//npm i express dotenv
// npm i express-async-error  -> async functionlarda hataları yakalıyor
//npm install sequelize sqlite3

const express = require('express')
// const { Sequelize } = require('sequelize')
const app = express()

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

app.all('/', (req, res)=>{
    res.send('TO DO APP')
})


// app.use('/todo', (req, res)=>{ //! url/todo/allurl -> (true) status code 200
//     res.send('TO DO APP222')
// })

// json to obj - obj to json
app.use(express.json())


// express to database connection
const {Sequelize, DataTypes}=require('sequelize')
const sequelize = new Sequelize('sqlite:./db.sqlite3'); // (RDBMS Adress)

//& create MODEL
// const Todo=sequelize.define('table / modem name', {'model details'})
const Todo=sequelize.define('todos', {
    // id:{
    //     type:DataTypes.BIGINT,
    //     primaryKey: true,   // default false
    //     unique: true,       // default false
    //     autoIncrement: true, // default false
    //     allowNull: false,   // default true
    //     comment:'my comment',
    //     field: 'custom name',
    //     defaultValue: 'default value'
    // },
    title: {
        type:DataTypes.STRING,
        allowNull: false
    },

    description: DataTypes.TEXT,

    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue:0 // -1 low, 0 normal, 1 high
    },
    // creat and update date auto generated    
    // createdDate: {type: DataTypes.DATE},
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})

//? bu async bir metod : (onun için then-chatch kullanabiliriz)
sequelize.authenticate()   // connect to db
    .then(()=>console.log('Todo DB has been connected'))
    .catch(()=>console.log('Todo DB has not been connected'))



//error control
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        // cause: err.cause,
        // stack: err.stack
    })
}


app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

