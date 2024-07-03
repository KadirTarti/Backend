
//!   QUESTION 3
//! What is the purpose of structured logging, and how can it benefit the debugging and monitoring of a Node.js application?


//& 1 - bazı structured logging kütüphaneleri: Morgan (middleware), Winston(lib), Pino(lib), Bunyan(lib)

// https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries/
// https://expressjs.com/en/resources/middleware/morgan.html
// https://dev.to/devland/how-to-use-morgan-in-your-nodejs-project-21im


//- Structured logging "analiz" ve "anlamayı" kolaylaştırmak için log verilerini key-value formatında tutarlı biçimde düzenlemeyi sağlar.
//- Açık, aranabilir, bağlam açısından zengin log'lar sağlayarak Node.js'te "debugging" ve "monitoring" den yararlanır. Uygulamanın stabil işleyişini izleme, hataları tespit etme ve performans optimizasyonu yapmaya katkı sağlar.
//- Sorunları hızlı biçimde tanımlama ve çözmeyi kolaylaştırır
//- Bu sayede loglar arasında arama, filtreleme ve analiz yapılabilir. Bu da sorunların kaynağını daha hızlı tespit etmenize ve uygulamanızın performansını daha etkin bir şekilde izlemenize yardımcı olur.



//*morgan middleware'i ile örnek bir kod yapısı

//Morgan, varsayılan olarak Apache'nin standart kombinasyon çıktısını taklit eden bir format kullanır. Bu, genellikle HTTP isteklerini loglamak için kullanılır. Bir Apache output örneği:
//? (combined) ----->  :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"




// "Tiny" Morgan'ın en küçük ve en hızlı logger formatıdır. "Tiny", her istek için şu bilgileri içerir:
// Morgan'ın "tiny" formatını kullanarak bir logger oluşturun ve uygulamanıza ekleyin.
app.use(morgan('tiny'));
//& (tiny)  -------->  :method :url :status :res[content-length] - :response-time ms
//! tiny çağırdığımız yerde aşağıdaki gibi kendi formatımızı yazmamıza gerek yok. o nedenle  bu kodu burada tuttuk. aşaıda index.js yapısında Morgan kullanımına küçük bir örnek var:





// $ npm install morgan

const express = require('express');
const morgan = require('morgan');

const app = express();


// Özel format stringini kullanarak Morgan'ı ekleme:
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),   // İstek yöntemini (GET, POST vb.) alır.
    tokens.url(req, res),      // İstek URL'sini alır.
    tokens.status(req, res),   // HTTP durum kodunu alır.
    tokens.res(req, res, 'content-length'),   // İstek boyutunu alır.
    tokens['response-time'](req, res),        // Yanıt süresini (milisaniye cinsinden) alır.
  ].join(' ');   // join metodu ile birleştirilip boşluklarla ayrılan bir string olarak döner
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






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

Structured logging,     log mesajlarının içeriğini analiz etmek için kullanılırken, 
monitoring            genellikle verileri ve istatistikleri analiz etmek için kullanılır.
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

