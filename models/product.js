module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        ref: {
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        energy_type: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        bid: {
            type: DataTypes.BOOLEAN
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
    });
    Product.associate = (models) => {
        Product.belongsTo(models.category);
    };

    return Product;
};