//! connect database

//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const {Sequelize, DataTypes}=require('sequelize')
//const sequelize=new Sequelize('RDB_name:adress')

// SQLITE
// const sequelize=new Sequelize('sqlite:./db.sqlite3')


//POSTGRE
// npm install --save pg pg-hstore
require('dotenv').config()
const PSW=process.env?.PSW 
const sequelize= new Sequelize (`postgres://abdulkadir1:${PSW}@localhost:5432/todoapp`)

sequelize.authenticate() // connect to db
    .then(()=>console.log('Todo DB connected'))
    .catch(()=>console.log('Todo DB NOT connected'))


module.exports={sequelize, DataTypes}