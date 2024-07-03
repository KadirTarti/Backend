
//!   QUESTION 3
//! What is the purpose of structured logging, and how can it benefit the debugging and monitoring of a Node.js application?


//& 1 - bazı structured logging kütüphaneleri: Morgan, Winston, Pino, Bunyan, Roarr

// https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries/
// https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html


//* Structured logging "analiz" ve "anlamayı" kolaylaştırmak için log verilerini JSON veya key-value formatında tutarlı biçimde düzenlemeyi sağlar.
//* * Açık, aranabilir, bağlam açısından zengin log'lar sağlayarak Node.js'te "debugging" ve "monitoring" den yararlanır. Her ikisi de uygulamanın sağlığını izlemek, hataları tespit etmek ve performans optimizasyonu yapmak için kullanılır ancak farklı odak noktalarına sahiptir.
//* * * Sorunları hızlı biçimde tanımlama ve çözmeyi kolaylaştırır

//morgan kütüphanesi ile örnek bir kod yapısı

// $ npm install morgan

const morgan = require('morgan')

morgan('tiny') 
/* "Tiny" Morgan'ın en küçük ve en hızlı logger formatıdır. "Tiny" formatı, her istek için şu bilgileri içerir:
İstek yöntemi (:method)
İstek URL'si (:url)
HTTP durum kodu (:status)
İstek boyutu (:res[content-length])
Cevap süresi (:response-time)
*/

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})




//* logger'ı kullanacağımız dosyada:
const logger = require('./logger');

logger.info('Application started');
logger.error('An error occurred', { message: 'Something went wrong' });

//logger.info metodu, uygulama başlatıldığında bir bilgi mesajı loglar. logger.error metodu ise bir hata mesajı loglar ve ekstra bir nesne içerir, bu nesnenin içeriği log mesajına eklenir.



// informaiton
//&  2 -  monitoring hakkında kısa bilgi  
// https://blog.logrocket.com/top-tools-node-js-monitoring/
// https://dev.to/devland/7-best-tools-for-monitoring-nodejs-servers-168h

//* Monitoring uygulamamızı izlemek, hataları otomatik olarak raporlamak ve uygulamanın performansını izlemek için kullanılabilir.
/*

*Monitoring'İn faydaları:

^Statü Takibi:
 Uygulamanın statüsünü sürekli olarak izleyip güncellemeyi, uygulamanın aktif mi yoksa pasif mi olduğunu görmeyi sağlar
^Hata Raporları:
 Uygulamada meydana gelen hataları otomatik olarak raporlar. Bu, hataları hızlı bir şekilde tespit etmemize yardımcı olur.
^Yüklenme Durumu:
 Uygulamanın yüklenme durumunu izler. Bu, uygulamanın ne kadar sürdüğünü görmek için yararlıdır.
^Log Dosyaları: 
Uygulamanın loglarını otomatik olarak izler ve saklar. Bu, logları kolayca yönetmemize yardımcı olur.


^FARKLARI
/*
Structured logging       log mesajlarının içeriğini ve formatını içerrir,
Monitoring               uygulamanın genel performansını ve güvenilirliğini izler.

Structured logging      genellikle uygulama içi bir işlevsellik iken
Monitoring         genellikle uygulamanın dışındaki bir hizmet veya aracı gerektirir
                (uygulamanın performansını ve devamlılığını izlemek için kullanılır)

Structured logging, log mesajlarının içeriğini analiz etmek için kullanılırken, 
monitoring genellikle verileri ve istatistikleri analiz etmek için kullanılır.
*/

/*
^Structred Logging FAYDALARI
1- Key-value çiftleri içeren formatı ile logların anlamını ve bağlamını kolaylaştırır

2- Log mesajlarını tutarlı ve standart olarak biçimlendirerek okunmalarını kolaylaştırır.

3- Makinelerin okumasını kolaylaştırır (Süreç otomasyonu ve zaman tasarrufu sağlar)

4- Log'larımızı kullanan sistemlerle kolay/hızlı entegrasyon sağlar

5-  Etkili hata ayıklama ve sorun giderme sağlar.

6- Uygulamanın tümünde teşvik ettiği tutarlı ve standart bir log formatı sayesinde kapasitesinin ölçeklendirilmesini ve logların standart bir şekilde sürdürülmesini kolaylaştırır.


^Monitoring Faydaları
1- Uygulamanın yanıt sürelerini, CPU kullanımını, bellek kullanımını ve diğer önemli verileri izlemek, performansı optimize etmek ve potansiyel performans sorunlarını erken aşamada tespit etmek için önemlidir.

2- Uygulamanın yanıt sürelerini ve hata oranlarını izlemek, kullanıcı deneyimini iyileştirmeye katkı sağlar

3- Otomasyon senaryolarını destekler. Örneğin, belirli bir performans eşik değerinden düşüş olduğunda otomatik olarak uyarılar gönderebilir veya otomatik düzeltme adımları gerçekleştirebilir 
*/ 

