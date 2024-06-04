//kurulum
//https://expressjs.com/en/starter/installing.html

'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

app.get('/', (req, res) => {
    req.send('hallo an alle')
})

app.listen(PORT, () =>{
    console.log(`Beispiel app arbeitet on port http://${HOST}:${PORT}`)
})