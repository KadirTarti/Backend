'use strict'

const express=require('express')
const cors = require('cors')
require('dotenv').config()

const { sequelize } = require('./src/configs/connectDB');
require("express-async-errors")

const app=express()



const corsOptions = {
    origin: 'http://localhost:5000'
  };
  
  app.use(cors(corsOptions));

const PORT = process.env?.PORT || 5000


app.use(express.json());
//! json router'dan önce gelmeli. YERİ ÖNEMLİ
// json to obj  and obj to json 
// app.use(express.json())


app.use('/', (req,res)=>{   // use verilen pathe eklenen şeyleri de kontrol eder
    res.send('Welcome to my API - TODO APP')
})



sequelize.authenticate().then(() => {
  console.log('Database connection established successfully');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


// app.use('/book', require('./src/routes/bookRoute'))

app.use(require('./src/middlewares/errorHandler') )

app.listen(PORT,()=>console.log(`server runned`))
