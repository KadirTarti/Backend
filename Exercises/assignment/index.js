'use strict'

const express=require('express')
const app=express()

require('dotenv').config()

const PORT=process.env?.PORT ||8000
const HOST=process.env?.HOST ||'127.0.0.1'

// app.all('/', (req,res)=>{   // all sadece verilen pathe kontrol yapar
//     res.send('Welcome to my API - TODO APP')
// })

app.use('/', (req,res)=>{   // use verilen pathe eklenen şeyleri de kontrol eder
    res.send('Welcome to my API - TODO APP')
})


app.listen(PORT,()=>console.log('server runned on localhost') )