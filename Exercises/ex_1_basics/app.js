import express from 'express'


//routes
import users from './routes/users.js'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs') //view özelliği
app.get('/', (req,res) => {
    res.render('index', {
        title: 'myTitle',
        heading: 'hoşgeldin recep'
    })
})



app.get('/', (req,res) => {
    res.send('hallo zusammen!')
})

// app.get('/user/:url', (req,res)=>{
//     res.json({
//         username:req.params.url
//     })
// })
//! üstteki kod bize http://localhost:3000/user/abdulkadir_tartilaci adresinde şunu veriyor:
//  {
// "username": "abdulkadir_tartilaci"
// }


app.use('/users', users)




app.use((req, res) => {
    res.status(404).send('aradığın sayfa burada değil sanırım :(')
})
//* üstteki kodu son koşulda çalıştırıyor. en sonda yazılmalı. başa alınca önce bunu çalıştırıp get lere geçmiyor 



app.listen(PORT, ()=> console.log(`uyuglama localhost:${PORT} adresinde çalışıyor`))