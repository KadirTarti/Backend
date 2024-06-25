const sequelize = require('./src/configs/db');
const Book = require('./src/models/bookModel');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use force: true for development, but be cautious as it will drop tables
    console.log('Database synchronized');
    process.exit(0);
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
    process.exit(1);
  }
};

syncDatabase();