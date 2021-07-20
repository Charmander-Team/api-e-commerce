module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        user_id: {
            type: Sequelize.INTEGER
        },
        paid: {
            type: Sequelize.BOOLEAN
        },
    });

    return Order;
};
