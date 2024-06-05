"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.get('/', (req, res) => {
//     res.send('Hallo Welt!   middleware')
// })


//& middleware

// app.get('/', (req, res, next) => { 
//     console.log('middle next'); 
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('Hier ist Middleware')
// })


// app.listen(PORT, () => {
//     console.log(`Middleware app arbeitet auf port http://${HOST}:${PORT}`);
//   });


//! middleware kullanıcı kontrolü yaptığımız bir yer!

// app.get('/', (req, res, next) => { 
//     console.log(req.query?.username);
//     if(req.query?.username === 'abdulkadir') {
//         next()
//     }else {
//         res.send('username ist falsch')
//     }
// })

// app.get('/', (req, res) => {
//     res.send('Hier ist Middleware - username ist eingegeben')
// })


//^arka arkaya nex yazdıkça hepsini yazdırır ta ki send i görene kadar. send başta olursa diğerlerini göstermez. isteği sonlandırır

// app.get('/', (req, res, next) => {
//     console.log('middleware  1  is here');
//         next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware  2  is here');
//         next()
// })
// app.get('/', (req, res, next) => {
//     console.log('middleware  3  is here');
//         next()
//     })
    
    
//     app.get('/', (req, res) => {
//         res.send('Hier ist Middleware - username ist eingegeben')
//     })


// app.get('/', (req, res, next) => {
//     console.log('middleware  4  is here');
//         next()
// })


//& function
// const middlewareFunc = (req, res, next) => {
//     console.log('middlewareFunc is called')
//     next()
// }

// app.get('/', middlewareFunc, (req, res) => {
//     res.send('app.get from >>>>  milddleware func')
// })


// const middlewareFuncOne = (req, res, next) => { 
//         console.log('middlewareFunc 1 is called')
//         next()
//     }

//     const middlewareFuncTwo = (req, res, next) => {
//         console.log('middlewareFunc 2 is called')
//         next()
//     }
    
// app.get('/', middlewareFuncOne, middlewareFuncTwo, (req, res) => {
//     res.send('app.get from >>>>  milddleware func one and two')
//     })
    






// const middlewareFunctionOne = (req, res, next) => {
//     req.messageOne = 'middleware one function called'  // normalde mesajları req ile yazıyorduk
//     next()
// }
// const middlewareFunctionTwo = (req, res, next) => {
//     res.messageTwo = 'middleware two function called'  //! burada mesajı res ile yazdırdık
//     next() 
// }


// app.get('/', middlewareFunctionOne, middlewareFunctionTwo, (req, res) => {
//     res.send({
//         messageOne: req.messageOne,
//         messageTwo: res.messageTwo,  //! burayı da res yaptık, sonuç değişmedi
//         messageEnd: 'welcome clarusway'
//     })
// })





// const middlewareFunctionOne = (req, res, next) => {
//     req.messageOne = 'middleware one function called'
//     next()
// }
// const middlewareFunctionTwo = (req, res, next) => {
//     res.messageTwo = 'middleware two function called'
//     next()
// }
// const middlewareFunctionThree = (req, res, next) => {
//     res.messageThree = 'middleware three function called'
//     next()
// }
// const middlewares = [middlewareFunctionOne, middlewareFunctionTwo]
// app.use(middlewares)
// app.get('/', (req, res) => {
//     res.send({
//         messageOne: req.messageOne,
//         messageTwo: res.messageTwo,
//         messageThree: res.messageThree,
//         messageEnd: 'welcome clarusway'
//     })
// })
// app.get('/user', middlewareFunctionThree, (req, res) => {
//     res.send({
//         messageOne: req.messageOne,
//         messageTwo: res.messageTwo,
//         messageThree: res.messageThree,
//         messageEnd: 'welcome clarusway'
//     })
// })




//? move to file:
const middlewareOne = require ('./middlewares/')
app.use(middlewareOne)

app.get('/user', (req, res) => {
    res.send({
        messageOne: req.messageOne,
        messageEnd: 'welcome to my website !! akt'
    })
})


app.listen(PORT, () => {
    console.log(`Middleware app arbeitet auf port http://${HOST}:${PORT}`);
  });
