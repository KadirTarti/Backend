'use strict'

/* ------------------------------------- */
//!          NODE JS SERVER               */
/* ------------------------------------- */

console.log('node js server');
const http = require('node:http');


// http.createServer((parameter1, parameter2) => {
//     console.log('server is running');
// })

// 1. parameter request  -- yapılan istek
// 2. parameter response -- alınan cevap


const app = http.createServer((req, res)=>{
    res.end('server runned')
    // !  res.end('bye')    - res.end yalnızca bir kez yazılmalı. 2.si yazılırsa hata verir
    console.log(req.method)
    // console.log('server is running');
})
app.listen(8000)


const applic = http.createServer((req, res)=>{
    res.end('server runned')
    // !  res.end('bye')    - res.end yalnızca bir kez yazılmalı. 2.si yazılırsa hata verir
    console.log(req.method)
    // console.log('server is running');
})
applic.listen(8000)


//! port'u elle 8000 olarak değil de env dosyası üzerinden yazmak için:
// .env dosyasını oluşturduk. içine PORT=8000 yazdık. sonra terminalden npm i dotenv kurduk
const dotenv = 2;
const PORT = process.env.PORT || 8000;

