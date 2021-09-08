const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
const createUser = async (req, res) => {
    // Validate request
    if (!req.body.mail) {
        return res.status(400).send({
            message: "Mail can not be empty!"
        });
    }

    // Check if mail address already exist
    const oldUser = await User.findOne({ where: { mail: req.body.mail } });
    if (oldUser) {
        return res.status(400).send({ msg: 'Already use' });
    }

    let timestamp = Math.round(new Date().getTime() / 1000)

    let tk = `${req.body.mail}:${req.body.password}`

    const salt = bcrypt.genSaltSync(10, 'a');
    tk = bcrypt.hashSync(tk, salt);

    let token = `${timestamp}:${tk}`

    // Create a user
    const user = {
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        mail: req.body.mail,
        password: req.body.password,
        admin: req.body.admin,
        image: req.body.image,
        token: token
    };

    User.create(user)
        .then(data => {

            let {password, hash, ...rest} = data.dataValues
            let obj = {...rest}

            res.send(obj)

            // res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve all users from the database.
const showAllUsers = (req, res) => {

    User.findAll( { where : { delete: null } })
        .then(async(users) => {
            for (const user of users) {
                delete user.dataValues.password;
                delete user.dataValues.hash;
                delete user.dataValues.delete;
            }
            res.status(200).send(users);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};

// Find a single user with an ID
const showUserById = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(user => {
            delete user.dataValues.password;
            delete user.dataValues.hash;
            res.status(200).send(user);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving user with ID = ${id}`
            });
        });
};

// Find a single user with mail
const getUserByMail = (req, res) => {
    const mail = req.params.mail;

    User.findOne({where: { mail: mail }})
        .then(user => {
            delete user.dataValues.password;
            delete user.dataValues.hash;
            return res.status(200).send(user);
        })
        .catch(err => {
            return res.status(500).send({
                message: `Error retrieving user with mail = ${mail}`
            });
        });
};

// Update a user by the ID in the request
const updateUser = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id },
        individualHooks: true 
    })
        .then(() => {
            User.findOne({where:{id:id}}).then((data)=>{
                let {password,hash,...rest} = data.dataValues 
                let obj = {...rest}
                res.send(obj)
            })
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating user with ID = ${id}`
            });
        });
};

// Delete a user with the specified ID in the request
const deleteUser = (req, res) => {
    const id = req.params.id;

    User.update( { delete: 1 }, {where: { id: id }})
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was 'deleted' successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with ID = ${id}. Maybe user was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete user with ID = ${id}`
            });
        });
};

// Delete all users from the database.
const deleteAllUsers = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};

// Check user
const checkUser = (req,res) => {

    // Validate request
    if (!req.body.mail || !req.body.mdp) {
        res.status(400).send({
            message: "Mail and password can not be empty!"
        });
    }

    const conditionMail = {mail:req.body.mail}
    // let mdp =""
    User.findOne({ where: conditionMail })
        .then(data => {
           let mdp = bcrypt.hashSync(req.body.mdp, data.hash)
           const condition = {
            [Op.and]: [
              { mail: req.body.mail },
              { password: mdp }
    
            ]
          }

          User.findOne({ where: condition })
        .then(data => {
            let timestamp = Math.round(new Date().getTime() / 1000)
            let tk = data.dataValues.mail+":"+data.dataValues.password

            const salt = bcrypt.genSaltSync(10, 'a');
            tk = bcrypt.hashSync(tk, salt);

            let token = {token:timestamp+":"+tk}
            let {password,hash,...rest} = data.dataValues 
            let obj = {...rest,...token}

            User.update({token:timestamp+":"+tk},{ where: condition })

            res.send(obj);
        })

        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
}

// Check user token
const checkUserToken = (req,res) => {
    // Validate request
    if (!req.body.token) {
        res.status(400).send({
            message: "token can not be empty!"
        });
    }

    const condition = {token : req.body.token}

    User.findOne({ where: condition }).then( data => {
        let timestamp = Math.round(new Date().getTime() / 1000)

        let tk = data.dataValues.mail+":"+data.dataValues.password

        const salt = bcrypt.genSaltSync(10, 'a');
        tk = bcrypt.hashSync(tk, salt);

        let token = {token:timestamp+":"+tk}
        let {password,hash,...rest} = data.dataValues 
        let obj = {...rest,...token}

        User.update({token:timestamp+":"+tk},{ where: condition })
        
        res.send(obj)
    }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });

    


}

module.exports = {
    createUser,
    showAllUsers,
    showUserById,
    getUserByMail,
    deleteUser,
    deleteAllUsers,
    updateUser,
    checkUser,
    checkUserToken
}
