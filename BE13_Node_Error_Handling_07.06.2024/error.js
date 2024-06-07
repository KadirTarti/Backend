'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/', (req,res)=>{
    throw new Error('Error Message')
})

app.get('/user/:id', (req,res, next)=>{
    const id = req.params?.id || 0

    try {
        if (isNaN(id)) {
            
        }
    } catch (error) {
        
    }
    throw new Error('Error Message')
    next()
})





app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
