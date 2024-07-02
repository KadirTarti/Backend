
//!   QUESTION 3
//! What is the purpose of structured logging, and how can it benefit the debugging and monitoring of a Node.js application?


// https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries/
// https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html

//* Structured logging "analiz" ve "anlamayı" kolaylaştırmak için log verilerini JSON veya key-value formatında tutarlı biçimde düzenlemeyi amaçlar.

//* * Açık, aranabilir, bağlam açısından zengin log'lar sağlayarak Node.js'te "debugging" ve "monitoring" den yararlanır.

//* * * Sorunları hızlı biçimde tanımlama ve çözmeyi kolaylaştırır

//& bazı structured loggin kütüphaneleri: Winston, Pino, Bunyan, Roarr



 // logger.js : 

const winston = require('winston');

const logger = winston.createLogger({  //winston kütüphanesinin createLogger fonksiyonunu kullanarak bir logger nesnesi oluşturduk

  level: 'info',   // level, logger'ın hangi log seviyelerini kaydetmesi gerektiğini belirtir (error, warn, info, http, verbose, debug ve silly)
  format: winston.format.json(),    //log mesajlarının biçimi
  transports: [  //mesajların nereye kaydedileceğini belirler
    new winston.transports.File({ filename: 'error.log', level: 'error' }), //errorlar
    new winston.transports.File({ filename: 'combined.log' })  //  tüm log mesajları (herhangi bir seviyeden) kaydedilir
  ]
});
//Bu kod, winston ile bir logger oluşturur. Logger, log seviyesi olarak info kullanır ve logları JSON formatında saklar. Hatalar (error seviyesindeki loglar) ayrıca error.log dosyasına yazılır, diğer loglar ise combined.log dosyasına yazılır.
module.exports = logger;




//& logger'ı kullanacağımız dosyada:
const logger = require('./logger');

logger.info('Application started');
logger.error('An error occurred', { message: 'Something went wrong' });

//logger.info metodu, uygulama başlatıldığında bir bilgi mesajı loglar. logger.error metodu ise bir hata mesajı loglar ve ekstra bir nesne içerir, bu nesnenin içeriği log mesajına eklenir.