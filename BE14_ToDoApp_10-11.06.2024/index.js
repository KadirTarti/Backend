'use strict'
/*
    EXPRESSJS 
    ! TODO PROJECT
*/



const express = require('express')
const app = express()

//catch async-error  
require("express-async-error")

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'


app.all('/',(req, res)=>{
    res.send('TODO APP')
})

/*
app.use('/todo',(req, res)=>{ // TODO + ALL url
    res.send('TODO APP')
})
*/

//! json router'dan önce gelmeli. YERİ ÖNEMLİ
// json to obj  and obj to json 
app.use(express.json())

app.use(require('./src/routers/todoRouter'))

app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

