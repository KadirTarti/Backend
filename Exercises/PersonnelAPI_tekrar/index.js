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

// Required modules
//*envVariables to process .env
require('dotenv').config()
const PORT = process.env.PORT || 8000

//asyncErrors to errorHandler
require('express-async-errors')


/* -------------------------------------------------------------------------- */
/*                                configuration                               */
/* -------------------------------------------------------------------------- */

//! database Connection
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

//-------------------------------------------------------------------------

//* MORGAN LOGGING
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan
//? npm i morgan

// const morgan = require("morgan");

// app.use(morgan("combined"))
// app.use(morgan("common"))
// app.use(morgan("dev"))
// app.use(morgan("short"))
// app.use(morgan("tiny"))
// app.use(morgan('IP=:remote-addr - :remote-user | TIME=[:date[clf]] | "METHOD=:method | URL=:url | HTTP/:http-version" | STATUS=:status | LENGTH=:res[content-length] |  REF=":referrer" | AGENT=":user-agent"'))


//! write logs to a file (tek bir dosy)
// create a write stream (in append mode)
// const fs = require("node:fs") //* dosya işlemleri için built-in module
// let accessLogStream = fs.createWriteStream("./access.log", { flags: 'a+' })

// // setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))
// app.use(
//   morgan("combined", {
//     stream: fs.createWriteStream("./access.log", { flags: "a+" }),
//   })
// );
//! write logs to a file day by day (her gün bir dosya)
// const fs = require("node:fs");

// const now = new Date().toISOString().split("T")[0]
// console.log(typeof now, now)

// app.use(
//   morgan("combined", {
//     stream: fs.createWriteStream(`./logs/${now}.log`, { flags: "a+" }),
//   })
// );
/* -------------------------------------------------------------------------- */
/*                                Documentation                               */
/* -------------------------------------------------------------------------- */
// https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

//* JSON  (json formatında dökümantasyon)
app.use("/documents/json", (req, res) => {
  res.sendFile("swagger.json", { root: "." });
});

//! SWAGGER  (swagger formatında dökümantasyon)
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(
  "/documents/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

//? REDOC
// const redoc = require("redoc-express");
// app.use("/documents/redoc", redoc({
//   title: "Personnel Api",
//   specUrl: '/documents/json'
// }))




/* -------------------------------------------------------------------------- */
/*                                 Middlewares                                 */
/* -------------------------------------------------------------------------- */

//*accept json
app.use(express.json())


//* logging
app.use(require('./src/middlewares/logging'))

//* filter,search,sort,find Oagination (res.getModelList)
app.use(require('./src/middlewares/findSearchSortPagi'))

app.use(require('./src/middlewares/authentication'))

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */
app.all('/', (req, res) => {
    // res.send('Welcome to PersonneLAPI')
    res.send({
        message: "Welcome to the Personnel API",
        user: req.user,
})
})

// app.use('/departments', require('./src/routes/department.router'))
// app.use('/personnels', require('./src/routes/personnel.router'))
// app.use('/token', require('./src/routes/token.router'))
// ?app.use(require('./src/routes/index'))  -> js indexleri default olarak arayıp bulur. bu nedenle alttaki gibi de yazılabilir:
app.use(require('./src/routes/'))




//* eşleşmeyen routerları yakalar
app.use((req, res, next)=> {
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