'use strict'


const Token = require('../models/token.model')
//^token bilgisi standart olarak headers başlığında gönderilir
/*
expressjs te gelen req üzerinden headersı yakalayabiliyoruz. console'dan görebiliyoruz. token bilgisi headers authorization ile gönderilir. Thunder'da headers başlığına authorization ekledik Token (boşluk) 
*/


module.exports = async(req,res,next) => {

}