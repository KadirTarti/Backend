const express = require('express');
const app = express();
const router = express.Router();






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


//! Adım 3: Authentication and Authorization:
/* Kullanıcıların kimliklerini doğrulamak ve yetkilendirmek için bir yöntem sağlamamız gerekiyor. 
Bu, genellikle bir oturum yönetimi veya token tabanlı kimlik doğrulama sistemi kullanılarak yapılır. 
Bu örnekte, basitlik adına req.user objesini doğrudan kullanacağız, ancak gerçek bir uygulamada bu obje oturumdan alınmalı veya bir API anahtarı kullanarak doğrulanmalı.
*/

//& Bu middleware, tüm istekler için çalışır ve kullanıcıyı doğrular
function authenticateUser(req, res, next) {
    // Burada kullanıcıyı gerçekten doğrulamak yerine, sadece bir örnek olarak req.user objesini ayarlıyoruz
    req.user = { id: 1, role: 'admin' }; // Gerçek uygulamada bu değerler oturumdan veya token'dan alınmalıdır
    next();
  }
  
  router.get('/admin', authenticateUser, isAdmin, (req, res) => {
    res.send('Admin paneline hoş geldiniz.');
  });


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
  




app.use('/', router);
app.listen(3000, () => console.log('Server started on port 3000'));


