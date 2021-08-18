module.exports = (sequelize, Sequelize) => {
    const Order_content = sequelize.define("order_content", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        order_id: {
            type: Sequelize.INTEGER
        },
        product_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
    });
    return Order_content;
};
