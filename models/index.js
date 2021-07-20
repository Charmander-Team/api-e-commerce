const config = require('../config/config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.sql_config.database, config.sql_config.user, config.sql_config.password, {
    host: config.sql_config.host,
    dialect: config.sql_config.dialect,
    operatorsAliases: false,

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
db.category = require("./category.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);

//on exporte pour utiliser notre connexion depuis les autre fichiers.
module.exports = db;
