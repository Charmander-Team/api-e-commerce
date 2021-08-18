module.exports = (sequelize, Sequelize) => {
    const Page = sequelize.define("page", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
        navbar_title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        page_color: {
            type: Sequelize.STRING
        },
        text_color: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        display: {
            type: Sequelize.INTEGER
        },
    });
    return Page;
};
