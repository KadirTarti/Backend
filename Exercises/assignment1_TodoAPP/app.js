'use strict'

//http'yi node.js ortamında kullan.
const http=require('node:http')   
const url = require('url')

//^(npm i http ile modülü yüklersek, sadece http yazarak çağırabiliyoruz)
//^ const http=require('http')


const routeHandler = (req, res) => {
    console.log(req.url)
    console.log(req.method)
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)
if (parsedUrl.pathname == '/' && req.method == 'GET') {
    res.write('Welcome to MyPage');
    res.end()
    // if (req.url == '/') {
//     res.write('Welcome to MyPage');
//     res.end()
} else {
    res.write('Page can not found');
    res.end()
}
}

//server kurulum
const server = http.createServer(routeHandler)

//server ayağa kaldırma
server.listen(3000)



const express = require('express')
const app = express()

// app.listen(8000, function(){
//     console.log('server is running')
// })


// app.use('/', (req, res)=>{       // use ile  hepsini çağırabiliyoruz. GET, PUT, DELETE vs
//     res.send('Hello')   
// })

//app.use() 'da özelden genele okuma yapar

// app.use('/products', (req, res)=>{       
//     if(req.method == 'GET') {
//         res.send('Hello GET PRODUCTS')
//     }   else if (req.method == 'POST'){
//         res.send('Hello POST')
//     } else {
//         res.send('req is not GET or POST')
//     }
// })


// app.use('/', (req, res)=>{       // bununla hepsini çağırabiliyoruz. GET, PUT, DELETE vs
//     if(req.method == 'GET') {
//         res.send('Hello GET')
//     }   else if (req.method == 'POST'){
//         res.send('Hello POST')
//     } else {
//         res.send('req is not GET or POST')
//     }
// })


