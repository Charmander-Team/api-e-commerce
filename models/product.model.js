module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        ref: {
            type: Sequelize.STRING
        },
        category_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        energy_type: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.INTEGER
        },
        condition: {
            type: Sequelize.STRING
        }
    });
    return Product;
};
