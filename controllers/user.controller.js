const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
const createUser = (req, res) => {
    // Validate request
    if (!req.body.mail) {
        res.status(400).send({
            message: "Mail can not be empty!"
        });
        return;
    }

    // Create a user
    const user = {
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        mail: req.body.mail,
        password: req.body.password,
        admin: req.body.admin,
        image: req.body.image
    };

    // Save user in the database
    User.create(user)
        .then(data => {
            res.send(data);
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
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
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
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with ID=" + id
            });
        });
};

// Update a user by the id in the request
const updateUser = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update user with ID=${id}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating user with ID=" + id
            });
        });
};

// Delete a user with the specified ID in the request
const deleteUser = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with ID=${id}. Maybe user was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with ID=" + id
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

module.exports = {
    createUser,
    showAllUsers,
    showUserById,
    deleteUser,
    deleteAllUsers,
    updateUser,
}
