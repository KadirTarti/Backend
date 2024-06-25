const sequelize = require('./src/configs/db');
const db = require('./src/configs/db'); // db.js dosyasını içe aktarın

db.sequelize.sync({ force: true })
 .then(() => console.log('Veritabanı başarıyla senkronize edildi'))
 .catch(err => console.error('Senkronizasyon sırasında bir hata oluştu:', err));