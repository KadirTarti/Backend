'use strict'

const express=require('express')
const app=express()

//catch async-error  
require("express-async-errors")

require('dotenv').config()
const PORT=process.env?.PORT ||8000
const HOST=process.env?.HOST ||'127.0.0.1'

// app.all('/', (req,res)=>{   // all sadece verilen pathe kontrol yapar
//     res.send('Welcome to my API - TODO APP')
// })

app.use('/', (req,res)=>{   // use verilen pathe eklenen şeyleri de kontrol eder
    res.send('Welcome to my API - TODO APP')
})

//! json router'dan önce gelmeli. YERİ ÖNEMLİ
// json to obj  and obj to json 
app.use(express.json())

app.use(require('./src/routes/bookRoute'))

app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log('server runned on localhost') )