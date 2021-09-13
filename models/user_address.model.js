module.exports = (sequelize, Sequelize) => {
    const User_address = sequelize.define("user_address", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zip: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
    return User_address;
};
