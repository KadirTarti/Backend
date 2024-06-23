'use strict'

const express=require('express')
const app=express()
const cors = require('cors')

const { Pool } = require('pg');
// const pool = new Pool({
//      port:process.env?.PORT ||  8000,
//      host:process.env?.HOST || '127.0.0.1',
//      password: process.env?.PSW,
//      database: process.env?.DB
// })

//catch async-error  
require("express-async-errors")

require('dotenv').config()


const PORT = process.env?.PORT || 8000

//! json router'dan önce gelmeli. YERİ ÖNEMLİ
// json to obj  and obj to json 
// app.use(express.json())
app.use(cors());


// app.all('/', (req,res)=>{   // all sadece verilen pathe kontrol yapar
//     res.send('Welcome to my API - TODO APP')
// })

app.use('/', (req,res)=>{   // use verilen pathe eklenen şeyleri de kontrol eder
    res.send('Welcome to my API - TODO APP')
})


app.use('/book', require('./src/routes/bookRoute'))

app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned`))
