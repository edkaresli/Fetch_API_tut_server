const Sequelize = require('sequelize');
const dbconfig = require('./dbconfig');

const uri = dbconfig.POSTGRES_HOST_URI;
const port = dbconfig.POSTGRES_HOST_PORT;
const user = dbconfig.POSTGRES_USER;
const password = dbconfig.POSTGRES_PASSWORD;
const dbname = dbconfig.POSTGRES_DB_NAME;

const sequelize = new Sequelize(`postgres://${user}:${password}@${uri}:${port}/${dbname}`);
const DB = {Sequelize, sequelize};

module.exports = DB;