//&use strict zorunlu bir kullanım değil...! backend'de daha kuralcı bir takip isteniyorsa yapılabilir!

//^server kurulumu
// const { strict } = require('assert')
const http = require('http')
const { parse } = require('path')

const routerHandler = (req, res)=> {
    
    console.log(req.url)
    console.log(req.method)

    //npm i url yaptık
    const parsedUrl = url.parse(req.url, true)  // bundan sonra alttaki if bloğunu değiştirebiliyoruz
    console.log(parsedUrl)

    // if (req.url == '/' && req.method =='GET') {
    //     res.write('Request url dogru calisti')
    //     res.end('siparis tamam.islem bitti')
    // }

    if (parsedUrl.pathname == '/' && req.method =='GET') {
        res.write('Request url dogru calisti')
        res.end('')
    } else{
        res.write('Not Found')
        res.end('')
    }
}

const server = http.createServer(routerHandler)

//^server ayağa kaldırma
server.listen(3000)

