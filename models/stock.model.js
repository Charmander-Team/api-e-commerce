module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("stock", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        product_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
    });

    return Stock;
};
