'use strict'

//http'yi node.js ortamında kullan.
const http=require('node:http')   


//^(npm i http ile modülü yüklersek, sadece http yazarak çağırabiliyoruz)
//^ const http=require('http')


const routeHandler = (req, res) => {
if (req.url == '/') {
    res.write('Welcome to MyPage');
    res.end()
} else {
    res.write('Page can not found');
    res.end()
}
}

//server kurulum
const server = http.createServer(routeHandler)

//server ayağa kaldırma
server.listen(3000)