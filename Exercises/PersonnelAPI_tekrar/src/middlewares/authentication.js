'use strict'


const Token = require('../models/token.model')
//^token bilgisi standart olarak headers başlığında gönderilir
/*
expressjs te gelen req üzerinden headersı yakalayabiliyoruz. console'dan görebiliyoruz. token bilgisi headers authorization ile gönderilir. Thunder'da headers başlığına authorization ekledik Token (boşluk) 
*/


module.exports = async(req,res,next) => {
// Authorization: Token ...
  // Authorization: ApiKey ...
  // Authorization: X-API-KEY ...
  // Authorization: x-auth-token ...
  // Authorization: Bearer ...

  console.log(req.headers);

const auth = req.headers?.authorization || null;
console.log(auth);
const tokenKey = auth ? auth.split(" ") : null
console.log(tokenKey);

// if(tokenKey && tokenKey[0] == 'Token'){
//   const tokenData = await Token.findOne({ token: tokenKey[1] }).populate("userId");
//   console.log(tokenData);
//   if(tokenData) req.user = tokenData.userId
// }

next();
}