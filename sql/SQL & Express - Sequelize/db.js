require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,            // database
  process.env.DB_USER,            // username
  process.env.DB_PASSWORD,        // password
  {
    host: process.env.DB_HOST,    // host
    dialect: 'mysql',
  }
);

module.exports = sequelize;