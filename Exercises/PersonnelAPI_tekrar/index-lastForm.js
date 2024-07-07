"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

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
app.use(require('./src/routes'))




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