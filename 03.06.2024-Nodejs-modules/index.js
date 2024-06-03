'use strict'

/* ------------------------------------- */
//!          NODE JS SERVER               */
/* ------------------------------------- */

console.log('node js server');
const http = require('node:http');

/*
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
*/

//! port'u elle 8000 olarak değil de env dosyası üzerinden yazmak için:
// .env dosyasını oluşturduk. içine PORT=8000 yazdık. sonra terminalden npm i dotenv kurduk
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST ||'127.0.0.1'



//const app = http.createServer((req, res)=> {
    
    /*
        "/" homepage
        "/FS" fullstack page
        "/DS" data science page
    */
/*
        if(req.url == "/") {
    res.end('this is homepage')
   } else if (req.url == "/FS") {
    res.end('welcome to FS page')
   } else if (req.url == '/DS') {
    res.end('welcome to Data Science')
   } else res.end('<h1> no page </h1>')

    // res.end('<h1> server runned </h1>')
})
app.listen(PORT,()=>console.log(`server is running http://${HOST}:${PORT}`))
*/

const app = http.createServer((req, res)=> {
    
//    if(req.url == "/" && req.method=='GET') {
    if(req.url == "/") {
        if(req.method=='GET'){
            res.statusCode=200
            res.end('welcome to your website')  // slash ile arayınca status 200 verecek 
        }else{
            res.statusCode=403   // get metodunu değiştirince bu 403 metodunu alacağız
            res.end('you can not use this method')
        }

   } else if (req.url == '/DS') {
    res.end('welcome to Data Science')
   } else 
   res.statusCode=404
   res.statusMessage='aradiginiz sayfa bulunamadi!'
   res.end('<h1> no page </h1>')
})
app.listen(PORT,()=>console.log(`server is running http://${HOST}:${PORT}`))