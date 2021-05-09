const config = require('./config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.sql_config.database, config.sql_config.user, config.sql_config.password, {
    host: config.sql_config.host,
    dialect: config.sql_config.dialect,
    operatorsAliases: false,
    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM

    pool: {
        max: config.sql_config.pool.max,
        min: config.sql_config.pool.min,
        acquire: config.sql_config.pool.acquire,
        idle: config.sql_config.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product.model.js")(sequelize, Sequelize);

//on exporte pour utiliser notre connexion depuis les autre fichiers.
module.exports = db;
