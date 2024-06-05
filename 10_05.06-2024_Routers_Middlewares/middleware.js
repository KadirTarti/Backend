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

// app.get('/', (req, res, next) => { 
//     console.log('middle next'); 
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('Hier ist Middleware')
// })


// app.listen(PORT, () => {
//     console.log(`Middleware app arbeitet auf port http://${HOST}:${PORT}`);
//   });


//! middleware kullanıcı kontrolü yaptığımız bir yer!

// app.get('/', (req, res, next) => { 
//     console.log(req.query?.username);
//     if(req.query?.username === 'abdulkadir') {
//         next()
//     }else {
//         res.send('username ist falsch')
//     }
// })

// app.get('/', (req, res) => {
//     res.send('Hier ist Middleware - username ist eingegeben')
// })




app.get('/', (req, res, next) => {
    console.log('middleware  1  is here');
        next()
})
app.get('/', (req, res, next) => {
    console.log('middleware  2  is here');
        next()
})
app.get('/', (req, res, next) => {
    console.log('middleware  3  is here');
        next()
})
app.get('/', (req, res, next) => {
    console.log('middleware  4  is here');
        next()
})





app.listen(PORT, () => {
    console.log(`Middleware app arbeitet auf port http://${HOST}:${PORT}`);
  });
