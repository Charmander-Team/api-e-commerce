module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        lastname: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        mail: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        admin: {
            type: Sequelize.BOOLEAN
        },
        image: {
            type: Sequelize.STRING
        },
    });
/*    Product.associate = (models) => {
        Product.belongsTo(models.category);
    };*/

    return User;
};
