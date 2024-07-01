"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */



//* envVariables to process.env
require('dotenv').config()
const PORT = process.env.PORT || 8000


/* -------------------------------------------------------------------------- */
/*                                errorHandler                                */
/* -------------------------------------------------------------------------- */
//& asyncErrors to errorHandler
require('express-async-errors')




/* -------------------------------------------------------------------------- */
/*                               configurations                               */
/* -------------------------------------------------------------------------- */
//! db connection
const {dbConnection} = require('./src/configs/dbConnection')
const errorHandler = require('./src/middlewares/errorHandler')
dbConnection()


/* -------------------------------------------------------------------------- */
/*                                 Middlewares                                */
/* -------------------------------------------------------------------------- */
//* accept json
app.use(express.json())

//* filter, search, sort, pegination(res.getModelList)
app.use(require('./src/middlewares/findSearchSortPagi'))



/* -------------------------------------------------------------------------- */
/*                                   routes                                   */
/* -------------------------------------------------------------------------- */
app.all("/",(req,res)=> {
    res.send("Welcome to the Personnel API")
})

app.use('/departments', require('./src/routes/department.router'))
app.use('/personnels', require('./src/routes/personnel.router'))


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
