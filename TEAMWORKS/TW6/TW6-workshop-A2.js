//!   QUESTION 2
//! Can you explain the concept of middleware in Node.js and how it is employed for managing user permissions using Token?



/*
Middleware, request ve response arasında çalışan bir yazılım katmanıdır. 
Kullanıcı izinlerinin yönetiminde token kullanıldığında, middleware, kullanıcının token'ını doğrular ve erişim izinlerini kontrol eder. Eğer kullanıcı yetkilendirilmişse, middleware isteği devam ettirir; aksi takdirde, yetkisiz veya yasaklanmış bir hata döndürür.

Aşağıdaki örnekte Express.js uygulamasında JWT (JSON Web Tokens) kullanarak kullanıcı izinlerini yöneteceğiz:
*/


const express = require('express');
const jwt = require('jsonwebtoken'); 
const app = express();

//* JWT'yi doğrulayan middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401); // Eğer token yoksa, yetkisiz erişim hatası döndür
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Eğer token geçersizse, yetkisiz erişim hatası döndür
      req.user = user;
      next();
    });
 }


 //* Role-Based Access Control (RBAC) middleware'i
function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === 'lead') {
        next();
      } else {
        res.status(403).send('Forbidden: You do not have permission to access this resource.');
      }
    };
  }


//* Admin olanlarin erişimini kontrol:
app.get('/lead', authenticateToken, checkRole('lead'), (req, res) => {
    res.send('Welcome to Lead panel');
  });

  
/*

  Bu örnekte, authenticateToken middleware fonksiyonu, gelen isteklerdeki Authorization başlığını kontrol eder ve eğer geçerli bir JWT token bulursa, bu token'ı doğrular. Token doğrulanırsa, req.user nesnesine kullanıcı bilgileri atanır ve next() fonksiyonu çağrılır, böylece istek ilgili rotaya yönlendirilir. Eğer token geçersiz veya eksikse, uygun bir hata mesajı döndürülür.

  checkRole middleware fonksiyonu, belirli bir rola sahip olup olmadığını kontrol eder. Eğer kullanıcı belirtilen rola sahipse, isteği ilgili rotaya yönlendirir; aksi takdirde, kullanıcıya erişim izni verilmeyerek bir hata mesajı döndürülür.
  
  Bu örnekte, /lead rotasına erişim, önce authenticateToken middleware'ı ile kontrol edilir. Eğer kullanıcı yetkilendirilmişse, checkRole('lead') middleware'ı ile tekrar kontrol edilir. Eğer kullanıcı lead rolündeyse, isteği ilgili rotaya yönlendirir; aksi takdirde, kullanıcıya erişim izni verilmeyerek bir hata mesajı döndürülür.
  */

  app.listen(3000, () => console.log('Server started on port 3000'));