'use strict'

//& NODE JS SERVER

require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST ||'127.0.0.1'


//npm i express
const express = require('express')
const app=express()
app.get('/', (req,res)=>{
    res.send('this is my message')
} )

app.listen(PORT,()=>console.log(`server is running http://${HOST}:${PORT}`))