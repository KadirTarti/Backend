'use strict'

/* ------------------------------ */
/*    BUILTIN    MIDDLEWARES            */
/* -----------------------------*/

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

//& Data Receving

app.use(express.json())

app.post('/login', (req, res) => {
    res.send({
        body: req.body,
        message: 'it works!'
    })
})


app.listen(PORT, () => {
    console.log(`BUILTINS app listening on port http://${HOST}:${PORT}`)
})
