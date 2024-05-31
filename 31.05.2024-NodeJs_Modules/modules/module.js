'use strict'

console.log("this is module.js");

//! single function
const testFunction=function() {
    console.log('this is test function')
}
module.exports=testFunction  

//^short hand :
module.exports=function() {
    console.log('this is a function, what direct exported')
}


//! multi function
const test2=function() {
    console.log('2- this is test2')
}
  
const test3=function() {
    console.log('3- this is test3')
}

const test4=function() {
    console.log('4- this is test4')
}
//& üç fonksiyonu aynı anda export için 1.yol - array olarak gönderme
// module.exports=[
//     test2,
//     test3,
//     test4
// ]


//& 2.yol object olarak gönderme
// module.exports={
//     test2,
//     test3,
//     test4,
//     pi: 3.14
// }

//? shorthand
module.exports.test2 = function(){
    console.log('2-- test func 2')
}

module.exports.test3 = function(){
console.log('3-- test func 3')
}

module.exports.test4 = function(){
    console.log('4-- test func 4')
}
module.exports.message = 'hallooo'