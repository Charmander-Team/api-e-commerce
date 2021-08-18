const bcrypt = require('bcrypt');

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
        token: {
            type: Sequelize.STRING
        },
        hash: {
            type: Sequelize.STRING,
        },
    },
    {
        hooks: {
            beforeCreate: async (user) => {
            if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
            user.hash = salt
            }
            },
            beforeUpdate:async (user) => {
            console.log("Pwd",user.password)
            if (user.changed('password')) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
            user.hash = salt
            console.log("Update",user.password)
            }
            }
            }, 
    }
    );
    return User;
};
