'use strict'

require('dotenv').config()


const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

const express = require('express')
const app = express()


app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

