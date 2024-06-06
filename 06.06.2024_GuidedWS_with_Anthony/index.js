//&use strict zorunlu bir kullanım değil...! backend'de daha katı bir takip isteniyorsa yapılabilir!

//^server kurulumu
// const { strict } = require('assert')
const http = require('http')

const routerHandler = ()=> {
}

const server = http.createServer(routerHandler)

//^server ayağa kaldırma
server.listen(3000)