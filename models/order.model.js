module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        paid: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING
        },
        ref: {
            type: Sequelize.STRING
        },
        delete: {
            type: Sequelize.BOOLEAN
        },
    });
    return Order;
};
