/*
Middleware, bir isteği işlerken veya kontrolü bir sonraki middleware fonksiyona aktarırken çalışan yazılım katmanını ifade eder. 
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
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Eğer token geçersizse, yetkisiz erişim hatası döndür
      req.user = user;
      next();
    });
 }


 //* Role-Based Access Control (RBAC) middleware'i
function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.status(403).send('Forbidden: You do not have permission to access this resource.');
      }
    };
  }


//* Admin olanlarin erişimini kontrol:
app.get('/admin', authenticateToken, checkRole('admin'), (req, res) => {
    res.send('Admin paneline hoş geldiniz.');
  });
  
  app.listen(3000, () => console.log('Server started on port 3000'));