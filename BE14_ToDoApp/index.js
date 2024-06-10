'use strict'

//npm i express dotenv
// npm i express-async-error  -> async functionlarda hataları yakalıyor

const express = require('express')
const app = express()

require('dotenv').config()
const PORT=process.env?.PORT ||  8000
const HOST=process.env?.HOST || '127.0.0.1'

app.all('/', (req, res)=>{
    res.send('TO DO APP')
})


// app.use('/todo', (req, res)=>{ //! url/todo/allurl -> (true) status code 200
//     res.send('TO DO APP222')
// })

// json to obj - obj to json
app.use(express.json())

//error control
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        // cause: err.cause,
        // stack: err.stack
    })
}



app.listen(PORT,()=>console.log(`server runned http://${HOST}:${PORT}`))

