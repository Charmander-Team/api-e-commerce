const config = require('./config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.sql_config.database, config.sql_config.user, config.sql_config.password, {
    host: config.sql_config.host,
    dialect: 'mysql',
    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
});

//on exporte pour utiliser notre connexion depuis les autre fichiers.
module.exports = { sequelize };