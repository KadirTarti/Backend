'use strict'

const express=require('express')
const app=express()
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 8000

// sadece belirtilen adresin erişimi için:
// const corsOptions = {
//     origin: 'http://localhost:5000'
//   };
  
// herkesin erişimi için
  app.use(cors());



app.use(express.json());
require('./src/configs/connectDB')
//! json router'dan önce gelmeli. YERİ ÖNEMLİ
// json to obj  and obj to json 
// app.use(express.json())


app.use('/', (req,res)=>{   // use verilen pathe eklenen şeyleri de kontrol eder
    res.send('Welcome to my API - BOOK APP')
})


app.use('/books', require('./src/routes/bookRoute'))

app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned`))
