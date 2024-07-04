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
require('express-async-errors ')

// continue from here...



/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
