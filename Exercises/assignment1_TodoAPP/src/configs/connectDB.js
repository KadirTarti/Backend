// // DBconnection

// require("dotenv").config();

// const { Sequelize } = require("sequelize");

// const PSW = process.env.PSW;
// const DB = process.env.DB;
// const USERNAME =process.env.USERNAME

// // SQLite3 için Sequelize yapılandırması
// const sequelize = new Sequelize(DB, USERNAME, PSW, {
//   dialect: 'postgres',
//   host: 'localhost',
// });

// sequelize
//  .authenticate()
//  .then(() => console.log("BooKAPI DB connected"))
//  .catch(err => console.error("BooKAPI DB NOT connected", err));

// module.exports = { sequelize, Sequelize };


// if (DB == "SQLITE") {
//   //SQLITE
//   sequelize = new Sequelize(
//     `postgres://${process.env.USERNAME}:${process.env.PSW}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`,
//     {
//       dialect: 'postgres'
//     }
//   );
// } else {
//   //POSTGRE
//   // npm install --save pg pg-hstore
//   // const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)

//   sequelize = new Sequelize(
//     `postgres://abdulkadir1:${PSW}@${HOST}/BookAPI`
//   );
// }


const { Sequelize, DataTypes } = require('sequelize');

// Sequelize örneğini oluşturun
const sequelize = new Sequelize('postgres1', 'root', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

// Bağlantıyı test etmek için bir fonksiyon oluşturun
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Veritabanına başarıyla bağlanıldı.');
  } catch (error) {
    console.error('Veritabanına bağlanılamadı:', error);
  }
}

// Basit bir model tanımlayın
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

// Veritabanını senkronize edin ve test için bazı veriler ekleyin
async function syncAndSeed() {
  await sequelize.sync({ force: true }); // Dikkat: force: true veritabanını sıfırlar!
  console.log('Veritabanı senkronize edildi.');

  const jane = await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com'
  });
  console.log('Jane Doe eklendi:', jane.toJSON());
}

// Fonksiyonları çağırın
(async () => {
  await testConnection();
  await syncAndSeed();
})();