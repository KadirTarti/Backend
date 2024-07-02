
//!   QUESTION 3
//! What is the purpose of structured logging, and how can it benefit the debugging and monitoring of a Node.js application?


//& 1 - bazı structured logging kütüphaneleri: Winston, Pino, Bunyan, Roarr

// https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries/
// https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html


//* Structured logging "analiz" ve "anlamayı" kolaylaştırmak için log verilerini JSON veya key-value formatında tutarlı biçimde düzenlemeyi amaçlar.
//* * Açık, aranabilir, bağlam açısından zengin log'lar sağlayarak Node.js'te "debugging" ve "monitoring" den yararlanır. Her ikisi de uygulamanın sağlığını izlemek, hataları tespit etmek ve performans optimizasyonu yapmak için kullanılır ancak farklı odak noktalarına sahiptir.
//* * * Sorunları hızlı biçimde tanımlama ve çözmeyi kolaylaştırır

//winston kütüphanesi ile örnek bir kod yapısı

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



//* logger'ı kullanacağımız dosyada:
const logger = require('./logger');

logger.info('Application started');
logger.error('An error occurred', { message: 'Something went wrong' });

//logger.info metodu, uygulama başlatıldığında bir bilgi mesajı loglar. logger.error metodu ise bir hata mesajı loglar ve ekstra bir nesne içerir, bu nesnenin içeriği log mesajına eklenir.




//&  2 - bazı monitoring kütüphaneleri: Winston, Pino, Bunyan, Roarr
// https://blog.logrocket.com/top-tools-node-js-monitoring/
// https://dev.to/devland/7-best-tools-for-monitoring-nodejs-servers-168h

//* Monitoring uygulamamızı izlemek, hataları otomatik olarak raporlamak ve uygulamanın performansını izlemek için kullanılabilir.


//pm2 tool'u ile örnek bir kod yapısı

// npm install pm2 -g
//pm2 src/index.js --NAME "myApp" --watch

/*
Bu komut, index.js adlı dosyanızı başlatır ve uygulamamıza myApp adını verir. 
--watch seçeneği, PM2'ye uygulamanın değişikliklerini izlemesini söyler. Bu sayede, yapılan değişiklikler PM2 tarafından otomatik olarak algılanır ve uygulama yeniden başlatılır.

PM2 ile izleme yapmamızın bize faydaları şöyledir:
*Statü Takibi: PM2, uygulamanın statüsünü sürekli olarak izler ve günceller. Bu, uygulamanın aktif mi yoksa pasif mi olduğunu görmek için yararlıdır.
^Hata Raporları: PM2, uygulamada meydana gelen hataları otomatik olarak raporlar. Bu, hatalarımızı hızlı bir şekilde tespit etmemize yardımcı olur.
&Yüklenme Durumu: PM2, uygulamanızın yüklenme durumunu izler. Bu, uygulamanızın ne kadar sürdüğünü görmek için yararlıdır.
Log Dosyaları: PM2, uygulamamızın loglarını otomatik olarak izler ve saklar. Bu, loglarımızı kolayca yönetmemize yardımcı olur.


PM2 ile uygulamayı izlemek için çeşitli komutlara ihtiyacımız var:

Listeleme
*pm2 list - Tüm süreçlerin durumunu gösterir.
pm2 prettylist - Süreç listesini pretty JSON formatında yazdırır.
pm2 describe 0 - Belirli bir süreç hakkında tüm bilgileri gösterir.

İzleme
*pm2 monit - Tüm süreçleri izler.

Loglar
*pm2 logs  - Tüm süreçlerin loglarını gösterir.
*pm2 flush - Tüm log dosyalarını temizler.
pm2 reloadLogs - Tüm logları yeniden yükler.

Eylemler
*pm2 stop all - Tüm süreçleri durdurur.
*pm2 restart all - Tüm süreçleri yeniden başlatır.
*pm2 reload all - Ağa bağlı uygulamalar için 0 saniye kesinti olmadan yeniden yükler.
pm2 stop 0 - Belirli bir süreç ID'sini durdurur.
pm2 restart 0 - Belirli bir süreç ID'sini yeniden başlatır.
pm2 delete 0 - Belirli bir süreçten PM2 listesindeyi siler.
pm2 delete all - Tüm süreçlerden PM2 listesindeyi siler.

Diğer
*pm2 save: Mevcut PM2 süreci listesini ve tüm yönetilen uygulamaların yapılandırma bilgilerini kaydeder, böylece PM2 yeniden başlatıldığında otomatik olarak başlatılır.
*/



//^FARKLARI
/*
Structured logging       log mesajlarının içeriğini ve formatını içerrir,
Monitoring               uygulamanın genel performansını ve güvenilirliğini izler.

Structured logging      genellikle uygulama içi bir işlevsellik iken
Monitoring         genellikle uygulamanın dışındaki bir hizmet veya aracı gerektirir(uygulamanın performansını ve sağlığını izlemek için kullanılır)

Structured logging, log mesajlarının içeriğini analiz etmek için kullanılırken, 
monitoring genellikle metrik ve istatistikleri analiz etmek için kullanılır.
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
1- Uygulamanın yanıt sürelerini, CPU kullanımını, bellek kullanımını ve diğer önemli metrikleri izlemek, performansı optimize etmek ve potansiyel performans sorunlarını erken aşamada tespit etmek için önemlidir.

2- Uygulamanın yanıt sürelerini ve hata oranlarını izlemek, kullanıcı deneyimini iyileştirmeye katkı sağlar

3- Otomasyon senaryolarını destekler. Örneğin, belirli bir performans eşik değerinden düşüş olduğunda otomatik olarak uyarılar gönderebilir veya otomatik düzeltme adımları gerçekleştirebilir 
*/ 

