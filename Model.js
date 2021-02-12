const Sequelize = require('sequelize');
const sequelize = new Sequelize('eshop_pkm', 'root', 'test', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
});

try {

    sequelize.authenticate();

    console.log('Connecté à la base de données MySQL!');

    sequelize.query("SELECT product.id as 'product_id', product.name as 'product_name' FROM product;").then(([results, metadata]) => {

        console.log(results);

    })

} catch (error) {

    console.error('Impossible de se connecter, erreur suivante :', error);

}

//on exporte pour utiliser notre connexion depuis les autre fichiers.
//var exports = module.exports = {};
//exports.sequelize = sequelize;