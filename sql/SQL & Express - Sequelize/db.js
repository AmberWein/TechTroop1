const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql_testing', 'username', 'MyNewPassword123!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;