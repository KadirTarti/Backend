const express = require('express')
const app = express()

app.listen(3001, function(){
    console.log('server başladı')
})


// app.use('/', (req,res) => {
//     res.send('send edildi')
// })

app.use('/', (req,res) => {
    if(req.method =='GET') {
        res.send('Hallo GET')
    } else if (req.method == 'POST') {
        res.send('Hallo POST')      
    } else {
        res.send('Req method is not GET or POST')      
    }
})


