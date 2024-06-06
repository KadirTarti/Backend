const express = require('express')
const app = express()

//import
const products = require('./products.json')


app.listen(3001, function(){
    console.log('server başladı')
})


// app.use('/', (req,res) => {
//     res.send('send edildi')
// })


//& yazım sırası özelden genele olmalı. çünkü yukarıdan aşağıya doğru okuyor. önce bulduğunu getiriyor. eğer '/' path'i en üstte olursa alttaki linklere gidemez.


// app.use('/products', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET Products')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')      
//     } else {
//         res.send('Req method is not GET or POST')      
//     }
// })

// app.use('/users', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET users')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')      
//     } else {
//         res.send('Req method is not GET or POST')      
//     }
// })


// app.use('/', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')      
//     } else {
//         res.send('Req method is not GET or POST')      
//     }
// })


app.get('/', (req, res) => {
    res.send({message: 'app get message calisti'})
})

// products.json dosyasından verileri çekmek için:
app.get('/products', (req,res)=>{
    res.send({
        message:'this is products page',
        products
    })
} )


