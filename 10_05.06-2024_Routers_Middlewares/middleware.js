"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.get('/', (req, res) => {
//     res.send('Hallo Welt!   middleware')
// })


//& middleware

app.get('/', (req, res, next) => { 
    console.log('middle next'); 
    next()
})

app.get('/', (req, res) => {
    res.send('Hier ist Middleware')
})


app.listen(PORT, () => {
    console.log(`Middleware app arbeitet auf port http://${HOST}:${PORT}`);
  });
