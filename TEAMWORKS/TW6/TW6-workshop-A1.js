//& |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//&     JWT,     RBAC,     Logging - Morgan,      Monitoring,     Documentation
//& |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//!   QUESTION 1
//! 1.What do permissions do in an express.js application?

//? permissionlar sayesinde hassas bilgilere kimin erişeceği kontrol edilir.
//? Böylece uygulamanın güvenliği sağlanır.

// Route-Level Permissions
// Middleware
// Authentication and Authorization
// Role-Based Access Control (RBAC)

const express = require('express');
const app = express();
const router = express.Router();



/*
! Adım 1: Route-Level Permissions
Uygulamamızda farklı sayfalar için rotalar tanımlarız.
*/

router.get('/books', (req, res) => {
    res.send('Books sayfasına hoş geldiniz.');
});
//? Burada herhangi bir "erişim kontrolü yapmadık" (henüz).



//& -------------------------------------------------------------------------- */
//&                         ---------------------------                        */
//& -------------------------------------------------------------------------- */



/*
! Adım 2: Middleware
Gelen isteği yakalayıp belirlenen rotaya gitmeden önce kontrolünü sağlıyoruz.
Kullanıcı rolünü ve/veya iznini kontrol edip, izin varsa (next ile) geçiş sağlıyoruz. Yoksa hata döndürüyoruz.
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
*/

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

//! jwt (jsonwebtoken) mantığı nedir? güvenli mi? artıları - eksileri:
/*
JWT, kullanıcılara kimlik doğrulama ve yetkilendirme bilgileri sağlayan bir standarttır. 
JWT, oturum bilgilerini saklamak için kullanılabilir, bu da kullanıcıların her istekte tekrar tekrar giriş yapma gerekliliğini ortadan kaldırır.
JWT, bir kullanıcının hangi yetkilere sahip olduğunu gösteren bir payload içerebilir. Bu, uygulamalarınızda rol tabanlı erişim kontrolü (RBAC) uygulamanıza olanak tanır.

^Avantajları:
  - Kolay kimlik doğrulama / yetkilendirme yapma 
  - Güvenlik : JWT güvenli algoritmalar kullanır 
  - Esneklik : Kimlik doğrulama ve yetkilendirme dışında .... örn. meta veri taşımak veya kullanıcı verilerini saklamak için de kullanılabilir
  - Bağımsızlık :JWT'ler belirli bir sunucu veya uygulamaya bağlı değildir. Farklı platformlar ve sistemler   arasında kolayca kullanılabilirler.
  - Geniş topluluk desteği

^Dezavantajları
  - Karmaşıklık: Büyük projelerde JWT yönetimi karmaşık olabilir. 
  - JWT'ler yanlış yönetilirse güvenlik riskleri oluşturabilir.
  - Büyük ve karmaşık JWT'ler, özellikle düşük bant genişliği olan bağlantılarda performans sorunlarına neden olabilir.

*/


//npm install jsonwebtoken
const jwt = require('jsonwebtoken');
// JWT'yi doğrulayan middleware fonksiyonu
function authenticateUser(req, res, next) {
  const authHeader = req.headers['authorization'] || null;  // gelen istekten Authorization başlığı oku. (Bu başlık genellikle Bearer <token> şeklinde gelir)
  const token = authHeader && authHeader.split(' '); 

  // if (token == null) return res.sendStatus(401); 
  if (!token) return res.sendStatus(401); // Eğer token yoksa, yetkisiz erişim hatası döndür
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.sendStatus(403); // Eğer token geçersizse, yetkisiz erişim hatası döndür
  }
}
//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//& PersonnelApi'deki yapımız:   (authentication.js)
module.exports = async(req,res,next) => {
  const auth = req.headers?.authorization || null;
  console.log(auth);
  const tokenKey = auth ? auth.split(" ") : null
  console.log(tokenKey);
  
  if(tokenKey && tokenKey[0] == 'Token'){
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate("userId");
    console.log(tokenData);
    if(tokenData) req.user = tokenData.userId
  }
  next();
  }
//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// Rol tabanlı erişim kontrolü için middleware fonksiyonu
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    throw new Error('NoPermission: You must login and to be Admin')
  }
}
//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//& PersonnelApi'deki yapımız:   (permission.js)
isAdmin: (req,res,next) => {
  if(req.user && req.user.isActive && req.user.isAdmin) {
      next();
  }else {
      res.errorStatusCode = 403;
      throw new Error('NoPermission: You must login and to be Admin')
  }
}
  //& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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
        res.errorStatusCode = 403;
        throw new Error(`Forbidden: ${requiredPermission} permission not granted.`);
      }
    };
  }
  
  // Rol ve izinleri tanımlayın
  const roles = {
    admin: ['create', 'read', 'update', 'delete'],
  };
  
  // Rol tabanlı erişim kontrolü ile rotayı koruyun
  app.get('/edit-resource', hasPermission('admin', 'update'), (req, res) => {
    res.send('Resource editing page.');
  });

//?  Bu örnekte, /edit-resource rotasına erişim, hasPermission middleware'ı kullanılarak kontrol edilir. Eğer kullanıcı admin rolünde ve update iznine sahipse, isteği ilgili rotaya yönlendirir. Eğer değilse, kullanıcıya erişim izni verilmeyerek bir hata mesajı döndürülür.
  

//^Notes:
//* Tüm bu adımlar, modüler erişim kontrol mantığı için middlware işlevlerini kullanır.
//* Bu adımlar, hassas verilerle veya eylemlerle ilgilenen Node.js uygulamaları için çok önemlidir. 


app.use('/', router);
app.listen(3000, () => console.log('Server started on port 3000'));


