
//!   QUESTION 4
//! In the context of Node.js, what logging and documentation practices should be followed to enhance the overall maintainability and collaboration on a project? 


/*
Node.js projelerinde genel sürdürülebilirliği ve işbirliğini geliştirmek için logging ve documentation açısından izlenecek yollar ve yapılması gerekenler:

*Logging
İyi bir logging stratejisi, uygulamanın sürdürülebilirliğini ve işbirliğini artırır.
&Amaç:
Uygulamanın performansını izlemek, hataları tespit etmek ve uygulamanın genel sağlığını değerlendirmek.

^- Bilinen bir Logging Kütüphanesi Kullanma: 
Winston, Pino, Bunyan, Morgan gibi logging kütüphaneler kullanarak, loglama işlemleri daha düzenli ve standart biçimde olur.

^- Düzenli İfadeler : 
Log mesajları JSON veya key-value formatında saklanarak, log verileri daha kolay analiz edilebilir ve makine tarafından okunabilir hale gelir.

^- Doğru Log Seviyelerini Kullanma: 
Hata, bilgi, uyarı gibi farklı log seviyelerini tanımlayarak, log mesajlarının önem derecesini belirleyin. Bu, log mesajlarını filtrelemeyi ve sadece gerekli bilgileri görmeyi kolaylaştırır.

^- Anlaşılır Log Mesajları: 
Log mesajları, olayın ne olduğunu ve neden olduğunu net bir şekilde ifade etmelidir. Bu, logları okumak için daha fazla zaman kazandırır.

^- Zaman Damgası Ekleme: 
Her log mesajına bir tarih damgası eklenirse, logların ne zaman kaydedildiği kolayca belirlenebilir.

^- Konseptsel Alanları Log Girişlerine Ekleme:
 Log girişlerine, olayın bağlamını sağlayan ekstra bilgiler (yorumlar) eklenebilir. Örneğin, kullanıcı kimliği veya oturum ID'si gibi.

^- Beşeri Hataları Loglayın: 
Beklenmeyen hatalar tam bir hata ayıklaması ile birlikte loglanmalıdır. Bu, hataların neden kaynaklandığını anlamakta yardımcı olur.

^- Gizli Verileri Koruma: 
Gizli veya hassas verilerle yapılan işlemlerde (log dosyasına ekleme, çıkarma) dikkatli olunmalı (güvenlik açığı!).

^- Merkezi Log Kullanımı: 
Logları merkezi bir log yönetimi sistemi kullanarak toplayıp ve analiz etmek log verilerinin daha iyi yönetilmesine ve analiz edilmesine yardımcı olur.



*Documentation
Documentation, kodun anlaşılmasını kolaylaştırır ve yeni katılımcıların projeye daha hızlı bir şekilde uyum sağlamalarına yardımcı olur. Kaliteli belgeler, kodun kalitesini artırır ve işbirliğini kolaylaştırır.
&Amaç:
 Kod tabanının işleyişini ve tasarımını açıklamak olmalıdır.

^- Kurulum ve Kodun Açıklanması: 
Uygulamanın kurulumu ve yapılandırmasıyla ilgili talimatlar yazılmalıdır. Kodun ne yaptığı ve niçin öyle yaptığı açıkça anlatılmalı. Bu kodların anlaşılması açısından önemlidir ve başkalarının uygulamaya daha hızlı adaptasyonunu sağlar.

^- API Referansı: 
API'leri ve onların kullanımını açıklayan belgeler oluşturulmalı. Bu, API'lerinizi kullanan diğer geliştiricilere yardımcı olur. (Fonksiyonlar, sınıflar ve modüller için detaylı bilgiler.)

^- Testler: 
Koda yapılan testler ve test senaryolar dökümantasyonda ele alınmalı. Böylece hem kodun sahibi hem de katılımcılar açısından kodun kalitesi ve güvenilirliği artar.

^- Tasarım Kararları: 
Kodun yapısına dair tasarım kararları ve neden bu kararların tercih edildiği açıklanmalı. Bu şekilde gelecekteki tasarımların tutarlı olması sağlanabilir.

^- Kullanıcı Kılavuzları: 
Uygulamanın kullanımı ve işlevlerine dair bir rehber olan kullanıcı kılavuzları oluşturulmalı. Böylece kullanıcılar uygulamayı daha hızlı ve açık şekilde anlayabilir.

^- Dökümantasyon yazarken:
- Kolay anlaşılır bir dil ve terminoloji kullanılmalı.
- Kod değişiklikleriyle birlikte dokümantasyon güncellenmeli.
- Dokümantasyon kolayca bulunabilir olmalı.
- Dokümantasyon oluşturma ve güncelleme için otomasyon araçlarını kullanılabilir.


*Öneri:
Görevleri yönetmek ve ekip çalışmasını geliştirmek için işbirliği araçları kullanılabilir.
Bu araçlar, projelerin daha verimli bir şekilde yürütülmesini ve takım üyelerinin birbirleriyle daha etkili bir şekilde iletişim kurmasını sağlar. 
Sorun izleyicileri ve proje panoları gibi araçlar, projenin ilerleyişini takip etme, görev dağılımını yönetme ve takım üyeleri arasında bilgi paylaşımını kolaylaştırma konusunda yardımcı olur.

Projenin durumu ve takım çalışmasındaki gereksinimlere göre çeşitli araçlar belirlenebilir. Bazıları:
GitHub, Jira, Trello, Slack, Asana, Microsoft Teams


Logging Araçları: Winston, Pino, Bunyan, Morgan
Documentation Araçları: TypeDoc, Redoc, JSDoc, Swagger, 
https://38103.fullstack.clarusway.com/documents/swagger/#/
https://38103.fullstack.clarusway.com/documents/redoc/
*/