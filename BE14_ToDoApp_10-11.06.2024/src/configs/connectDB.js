//! connect database

//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const {Sequelize, DataTypes}=require('sequelize')
//const sequelize=new Sequelize('RDB_name:adress')
const sequelize=new Sequelize('sqlite:./db.sqlite3')

module.exports={sequelize, DataTypes}