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
// Required Modules

//* envVariables to process.env
require('dotenv').config()
const PORT = process.env.PORT || 8000;

//? asyncErrors to errorHandler
require("express-async-errors")

/* -------------------------------------------------------------------------- */
/*                               Configurations                               */
/* -------------------------------------------------------------------------- */

//! database connection
const {dbConnection} = require("./src/configs/dbConnection")
dbConnection()


/* -------------------------------------------------------------------------- */
/*                                 MiddleWares                                */
/* -------------------------------------------------------------------------- */

//* accept json
app.use(express.json())


//*Filter,Search,Sort,Pagination(res.getModelList)
app.use(require("./src/middlewares/findSearchSortPagi"))

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.all("/",(req,res)=> {
    res.send("Welcome to the Personnel API")
})

app.use("/departments", require("./src/routes/department.router"));

app.use("/personnels", require("./src/routes/personnel.router"));

//* eşleşmeyen routeları yakalar
app.use((req,res,next)=> {
    res.status(404).send({
        error:true,
        message: "Route not found!"
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
