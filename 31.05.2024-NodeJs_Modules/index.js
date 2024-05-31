'use strict'
console.log('index.js')
// require('./modules/module.js')

//! single
// const testFunction= require('./modules/module')
// testFunction(),

//! multi function
//^array
// const [test2, test3, test4] = require('./modules/module')  //buraya çekilme değil gönderilen dosyadakie export sırasına göre atar
// test2()
// test3()
// test4()

//^object
// const { test4: t_D, pi, test2, test3:t_C} = require('./modules/module') //çağrıldığı sıraya göre atar. import ederken key ekleyebilir onunla çağırabiliriz
// t_C() //test3()
// console.log(pi)
// t_D() //test4()
// test2()


const { test4: t_D, message, test2, test3:t_C} = require('./modules/module') //çağrıldığı sıraya göre atar. import ederken key ekleyebilir onunla çağırabiliriz
t_C() //test3()
console.log(message)
t_D() //test4()
test2()


//! buildin
require('http')  //ilk önce node_modules klasörüne bakar. bulamazsa globalde arar
require('node:http') // direk globalde node'a bakar