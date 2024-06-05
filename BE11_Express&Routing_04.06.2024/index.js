//kurulum
//https://expressjs.com/en/starter/installing.html

'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// app.get('/', (req, res) => {
//     req.send('hallo an alle')
// })

// app.get('/', (req, res) => {req.send('GET method called!')}) // listeleme ve/veya bilgi alma 
// app.post('/', (req, res) => {req.send('POST method called!')}) // yeni bir veri-bilgi kaydetme
// app.put('/', (req, res) => {req.send('PUT method called!')}) // veri güncelleme
// app.patch('/', (req, res) => {req.send('PATCH method called!')})
// app.delete('/', (req, res) => {req.send('DELETE method called!')})

// app.all('/', (req, res, next) => {    // all >>>  tüm istekleri çalıştırır 
//     console.log('req >>>', req);
//     next()
// })

// app.get('/abc/def', (req, res)=> {res.send({messgae: 'GET method called!'})})
// //http://127.0.0.1:8000/abc/def
// app.get('/elbise(ler)', (req, res)=> {
//     res.send({messgae: 'GET method called elbise(ler)!'})})

// app.get('/elbise(ler)?aa', (req, res)=> {
//     res.send({messgae: 'GET method called elbise(ler)!'})})


//& regex
// app.get(/test/, (req, res) => {res.send('Regex is working 1')})    // path içinde mutlaka 'test' olmalı.
// http://127.0.0.1:8000/test      bununla alttakiler  aynı sonucu verir
// http://127.0.0.1:8000/testaassdfsdfs
// http://127.0.0.1:8000/aaaaaaaatestccccccc
// http://127.0.0.1:8000/asasasaaaatest




// app.get(/test$/, (req, res) => {res.send('Regex is working 2')})   // $ işareti bitişi gösterir. test ile bitmeli
// http://127.0.0.1:8000/test      bununla alttaki link aynı sonucu verir
// http://127.0.0.1:8000/kjdsanbcdskstest


// app.get(/^\/test/, (req, res) => {res.send('Regex is working 2')})


//& url params
// app.get('/:userId/:productId', (req, res) => {
//     const {userId, productId} = req.params
//     console.log(userId, productId)
//     req.send({userId, productId})})


// app.get('/:userId/:productId', (req, res)=>{
//     res.send({
//         protocol: req.protocol,
//         hostname: req.hostname,
//         method: req.method,
//         url: req.url,
//         params: req.params,
//         body: req.body,
//         query: req.query,
//         header: req.headers,
//     })
// })


//& query
// app.get('/', (req, res)=>{
//     res.send({query: req.query})
// })

//! bu linki girince
// http://127.0.0.1:8000/?namw=test&surname=user 

//! bu çıktıyı alıyoruz
// {
//     'query': {
//         'name': 'firstname',
//         'surname': 'lastname'
//     }
// }


//^ ACHTUNG!
app.get('/:name-:surname/:topCategory/:subCategory/:gender-:genderCategory', (req, res) =>{res.send(req.params)})
// http://127.0.0.1:8000/test-user/elbise/pantalon/kadin-pantalon
//* link ve get metodu içinde kullanılan slash ve tire'ler aynı yerlerde olmalı. sonuç açısından ikisi de aynı!

/* response değeri
{
  "name": "test",
  "surname": "user",
  "topCategory": "elbise",
  "subCategory": "pantalon",
  "gender": "kadin",
  "genderCategory": "pantalon"
}
*/

app.listen(PORT, () =>{
    console.log(`Beispiel app arbeitet on port http://${HOST}:${PORT}`)
})


//https://restfulapi.net/http-status-codes/
// HTTP defines these standard status codes that can be used to convey the results of a client’s request. The status codes are divided into five categories.

// 1xx: Informational – Communicates transfer protocol-level information.
// 2xx: Success – Indicates that the client’s request was accepted successfully.
// 3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.
// 4xx: Client Error – This category of error status codes points the finger at clients.
// 5xx: Server Error – The server takes responsibility for these error status codes.


//? EXTRA
/*
app.get('/', (req, res) => {
    //res.redirect('https://www.google.com')
    res.redirect(302, '/about')
})

app.get('/about', (req, res) => {
    res.send('about')
})
*/

//* file
/*
app.get('/file', (req, res) => {
    res.sendFile(`${__dirname}/readme.md`)
})

app.get('/download', (req, res) => {
    res.download('./readme.md', 'express-routing.txt')
})
*/

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})