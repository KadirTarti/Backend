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



/* ------------------------------------------------------- */
// //* MORGAN LOGGING
// // https://expressjs.com/en/resources/middleware/morgan.html
// // https://github.com/expressjs/morgan
// //? npm i morgan

// const morgan = require("morgan");

// // app.use(morgan("combined"))
// // app.use(morgan("common"))
// // app.use(morgan("dev"))
// // app.use(morgan("short"))
// // app.use(morgan("tiny"))
// // app.use(morgan('IP=:remote-addr - :remote-user | TIME=[:date[clf]] | "METHOD=:method | URL=:url | HTTP/:http-version" | STATUS=:status | LENGTH=:res[content-length] |  REF=":referrer" | AGENT=":user-agent"'))

// //! write logs to a file
// // create a write stream (in append mode)
// const fs = require("node:fs") //* dosya işlemleri için built-in module
// var accessLogStream = fs.createWriteStream("./access.log", { flags: 'a+' })  // otomatik acces dosyası oluşturur

// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))






/* -------------------------------------------------------------------------- */
/*                                 MiddleWares                                */
/* -------------------------------------------------------------------------- */

//* accept json
app.use(express.json())

//* Logging
app.use(require("./src/middlewares/logging"))

//*Filter,Search,Sort,Pagination(res.getModelList)
app.use(require("./src/middlewares/findSearchSortPagi"))

app.use(require("./src/middlewares/authentication"))

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.all("/",(req,res)=> {
    res.send("Welcome to the Personnel API")
})

// app.use("/departments", require("./src/routes/department.router"));

// app.use("/personnels", require("./src/routes/personnel.router"));

// app.use('/tokens', require('./src/routes/token.router'))

// app.use(require('./src/routes/index')) //! üstteki satırları route'daki index'e aktarıp bu satırla çağırdık. 
app.use(require('./src/routes/')) //^JS index isimlendirmesini default kabul ettiği için burada ('./src/routes/') yazmamız da yeterli.

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


// require('./src/helpers/sync')()