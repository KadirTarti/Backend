const express = require('express');
const app = express();
const router = express.Router();


//!   QUESTION 1
//! 1.What do permissions do in an express.js application?


/*
! Adım 1: Route-Level Permissions
Öncelikle, belirli bir kullanıcıya sadece belirli rotalara erişim izni vermek istiyoruz.
Örneğin, sadece admin rolündeki kullanıcıların /admin rotasına erişimini sınırlıyoruz.
*/

router.get('/admin', (req, res) => {
    res.send('Admin paneline hoş geldiniz.');
});
//? Bu kodda, /admin rotası sadece GET isteklerine yanıt verir ve 
//? "Admin paneline hoş geldiniz." mesajını gönderir. 
//? Ancak, bu rotaya "erişim kontrolü yapmadık" henüz.



//& -------------------------------------------------------------------------- */
//&                         ---------------------------                        */
//& -------------------------------------------------------------------------- */




/*
! Adım 2: Middleware
/admin rotasına erişim kontrolü ekliyoruz
Kullanıcının admin rolünde olup olmadığını kontrol ediyoruz ve ardından isteği ilgili rotaya yönlendirir.
*/
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  }

  router.get('/admin', isAdmin, (req, res) => {
    res.send('Admin paneline hoş geldiniz.');
  });
//? bu fonksiyon, isteği alır ve req.user.role'un admin olup olmadığını kontrol eder. 
//? Eğer öyleyse, next() fonksiyonunu çağırarak isteği ilgili rotaya yönlendirir. Eğer değilse, kullanıcıya 403 Forbidden hatası döndürür.




//& -------------------------------------------------------------------------- */
//&                         ---------------------------                        */
//& -------------------------------------------------------------------------- */





//! Adım 3: Authentication and Authorization:
/* Kullanıcıların kimliklerini doğrulamak ve yetkilendirmek için bir yöntem sağlamamız gerekiyor. 
Bu, genellikle bir oturum yönetimi veya token tabanlı kimlik doğrulama sistemi kullanılarak yapılır. 
Bu örnekte, basitlik adına req.user objesini doğrudan kullanacağız, ancak gerçek bir uygulamada bu obje oturumdan alınmalı veya bir API anahtarı kullanarak doğrulanmalı.
*/

//& Bu middleware, tüm istekler için çalışır ve kullanıcıyı doğrular

const jwt = require('jsonwebtoken');
// JWT'yi doğrulayan middleware fonksiyonu
function authenticateUser(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  // if (token == null) return res.sendStatus(401); 
  if (!token) return res.sendStatus(401); // Eğer token yoksa, yetkisiz erişim hatası döndür
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.sendStatus(403); // Eğer token geçersizse, yetkisiz erişim hatası döndür
  }
}

// Rol tabanlı erişim kontrolü için middleware fonksiyonu
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send('Forbidden: You do not have permission to access this resource.');
  }
}

// Admin rolüne sahip kullanıcıların erişimini kontrol eden rotayı
router.get('/admin', authenticateUser, isAdmin, (req, res) => {
  res.send('Admin paneline hoş geldiniz.');
});
module.exports = router;

/*
Burada gelen isteklerdeki Authorization başlığını kontrol edilir ve eğer geçerli bir JWT token bulursa, bu token'ı process.env.ACCESS_TOKEN_SECRET anahtar kelimesiyle birlikte doğrular. Token doğrulanırsa, req.user nesnesine decode edilmiş kullanıcı bilgileri atanır ve next() fonksiyonu çağrılır, böylece istek ilgili rotaya yönlendirilir. Eğer token geçersiz veya eksikse, uygun bir hata mesajı döndürülür.
*/


//& -------------------------------------------------------------------------- */
//&                         ---------------------------                        */
//& -------------------------------------------------------------------------- */



/*
 ! Adım 4: Role-Based Access Control (RBAC)
Belirli bir rotaya erişim kontrolü sağlar. Örneğimizde, admin rolüne sahip kullanıcıların kontrolünü yapıyoruz.
*/

// Rol tabanlı izinler için ortam koşulunu tanımlayın
function hasPermission(role, requiredPermission) {
    return (req, res, next) => {
      if (roles[role] && roles[role].includes(requiredPermission)) {
        next();
      } else {
        res.status(403).send(`Forbidden: ${requiredPermission} permission not granted.`);
      }
    };
  }
  
  // Rol ve izinleri tanımlayın
  const roles = {
    admin: ['read', 'write', 'delete'],
  };
  
  // Rol tabanlı erişim kontrolü ile rotayı koruyun
  app.get('/edit-resource', hasPermission('admin', 'write'), (req, res) => {
    res.send('Resource editing page.');
  });

//?  Bu örnekte, /edit-resource rotasına erişim, hasPermission middleware'ı kullanılarak kontrol edilir. Eğer kullanıcı admin rolünde ve write iznine sahipse, isteği ilgili rotaya yönlendirir. Eğer değilse, kullanıcıya erişim izni verilmeyerek bir hata mesajı döndürülür.
  



//^Differences:
//* Adım 1 ve 2, erişim kontrol mantığını organize etmedeki yaklaşımlarında farklılık gösterir (gömülü vs. ara yazılım).
//* Adım 3 ve 4, kimlik doğrulama ve yetkilendirme işlevlerini katmanlama gösterir.
//* Tüm bu adımlar, modüler erişim kontrol mantığı için ara yazılım işlevlerini kullanır.


//^Importance in Node.js Applications (Security)
/* Bu adımlar, hassas verilerle veya eylemlerle ilgilenen Node.js uygulamaları için çok önemlidir. */




app.use('/', router);
app.listen(3000, () => console.log('Server started on port 3000'));


