//* db connect

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db.sqlite3', 'abdulkadir', '1234', {
  host: 'http://127.0.0.1:8000',
  dialect: 'postgres',
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

  module.exports = {sequelize}