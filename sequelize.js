const Sequelize = require('sequelize');
const UserModel = require('./Model/usermodel');
const dbconfig = require('./dbconfig');

const uri = dbconfig.POSTGRES_HOST_URI;
const port = dbconfig.POSTGRES_HOST_PORT;
const dbuser = dbconfig.POSTGRES_USER;
const password = dbconfig.POSTGRES_PASSWORD;
const dbname = dbconfig.POSTGRES_DB_NAME;

const sequelize = new Sequelize(`postgres://${dbuser}:${password}@${uri}:${port}/${dbname}`);

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });

module.exports = {
  User
}