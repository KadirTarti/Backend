//* MongoDb connection

require("dotenv").config();

const { Sequelize } = require("sequelize");

const PSW = process.env.PSW;
const DB = process.env.DB;

// SQLite3 için Sequelize yapılandırması
const sequelize = new Sequelize(DB, PSW, {
  dialect: 'sqlite',
  storage: './bookDB.sqlite3' // SQLite3 dosya yolunu buraya girin
});

sequelize
 .authenticate()
 .then(() => console.log("BooKAPI DB connected"))
 .catch(err => console.error("BooKAPI DB NOT connected", err));

module.exports = { sequelize, Sequelize };


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
