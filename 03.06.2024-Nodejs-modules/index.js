'use strict'

/* ------------------------------------- */
//!          NODE JS SERVER               */
/* ------------------------------------- */

console.log('node js server');
const http = require('node:http');


// http.createServer((parameter1, parameter2) => {
//     console.log('server is running');
// })

// 1. parameter request  -- yapılan istek
// 2. parameter response -- alınan cevap


const app = http.createServer((req, res)=>{
    console.log('server is running');
})
app.listen(8000)