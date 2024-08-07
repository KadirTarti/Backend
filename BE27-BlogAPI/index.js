'use strict'

const express = require('express')
const app = express();
const PORT = 8000

app.get('/', (req, res) => {
    res.send('first log')
})

app.listen(PORT, ()=>{
    console.log(`Sunucu ${PORT}'da aktif`)
})