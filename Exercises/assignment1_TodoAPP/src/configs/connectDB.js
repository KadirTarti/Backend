//* MongoDb connection


const { Sequelize, DataTypes } = require("sequelize");

const HOST=process.env?.HOST || '127.0.0.1'

require("dotenv").config();
const PSW = process.env?.PSW;
const DB = process.env.DB;
let sequelize;

if (DB == "SQLITE") {
  //SQLITE
  sequelize = new Sequelize("sqlite:./datab.sqlite3", "username", "password", {
    host: process.env.DB,
    dialect: 'postgres',
  });
} else {
  //POSTGRE
  // npm install --save pg pg-hstore
  // const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)

  sequelize = new Sequelize(
    `postgres://abdulkadir2:${PSW}@${HOST}:5432/todoapp`
  );
}

sequelize
  .authenticate() // connect to db
  .then(() => console.log("BooKAPI DB connected"))
  .catch(() => console.log("BooKAPI DB NOT connected"));

module.exports = { sequelize, DataTypes };
