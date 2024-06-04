//kurulum
//https://expressjs.com/en/starter/installing.html

'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// app.get('/', (req, res) => {
//     req.send('hallo an alle')
// })

app.get('/', (req, res) => {req.send('GET method called!')}) // listeleme ve/veya bilgi alma 
app.post('/', (req, res) => {req.send('POST method called!')}) // yeni bir veri-bilgi kaydetme
app.put('/', (req, res) => {req.send('PUT method called!')}) // veri güncelleme
app.patch('/', (req, res) => {req.send('PATCH method called!')})
app.delete('/', (req, res) => {req.send('DELETE method called!')})



app.listen(PORT, () =>{
    console.log(`Beispiel app arbeitet on port http://${HOST}:${PORT}`)
})