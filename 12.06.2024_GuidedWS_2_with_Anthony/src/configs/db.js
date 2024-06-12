//* db connect

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./db.sqlite3');

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }




  module.exports = {sequelize}