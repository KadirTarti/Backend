
//!   QUESTION 3
//! What is the purpose of structured logging, and how can it benefit the debugging and monitoring of a Node.js application?

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