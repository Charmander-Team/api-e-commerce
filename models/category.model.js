module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
        id: {type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
    });
    return Category;
};
