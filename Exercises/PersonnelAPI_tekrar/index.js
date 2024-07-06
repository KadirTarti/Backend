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



/* -------------------------------------------------------------------------- */
/*                                 Middlewares                                 */
/* -------------------------------------------------------------------------- */

//*accept json
app.use(express.json())

//* filter,search,sort,find Oagination
app.use(require('./src/middlewares/findSearchSortPagi'))


/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */
app.all('/', (req, res) => {
    res.send('Welcome to PersonneLAPI')
})

app.use('/departments', require('./src/routes/department.router'))
app.use('/personnels', require('./src/routes/personnel.router'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
