//* MongoDb connection


const { Sequelize, DataTypes } = require("sequelize");



// const HOST=process.env?.HOST || '127.0.0.1'

require("dotenv").config();
const PSW = process.env?.PSW;
const DB = process.env.DB;
let sequelize;


const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 5000

if (DB == "SQLITE") {
  //SQLITE
  sequelize = new Sequelize(
    `postgres://abdulkadir1:1234@localhost:5432/BookAPI`,
    {
      dialect: 'postgres'
    }
  );
} else {
  //POSTGRE
  // npm install --save pg pg-hstore
  // const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)

  sequelize = new Sequelize(
    `postgres://abdulkadir1:1234@localhost:5432/BookAPI`
  );
}

sequelize
  .authenticate() // connect to db
  .then(() => console.log("BooKAPI DB connected"))
  .catch(() => console.log("BooKAPI DB NOT connected"));

module.exports = { sequelize, DataTypes };
