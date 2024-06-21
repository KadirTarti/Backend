//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const { Sequelize, DataTypes } = require("sequelize");
//const sequelize=new Sequelize('RDB_name:adress')

const HOST=process.env?.HOST || '127.0.0.1'

require("dotenv").config();
const PSW = process.env?.PSW;
const DB = process.env.DB;
let sequelize;

if (DB == "SQLITE") {
    //SQLITE
    sequelize = new Sequelize("sqlite:./db.sqlite3");
  } else {
    //POSTGRE
    // npm install --save pg pg-hstore
    // const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)
  
    sequelize = new Sequelize(
      `postgres://abdulkadir1:${PSW}@${HOST}:5432/todoapp`
    );
  }


  sequelize
  .authenticate() // connect to db
  .then(() => console.log("Book DB connected"))
  .catch(() => console.log("Book DB NOT connected"));

module.exports = { sequelize, DataTypes };



module.exports= Book