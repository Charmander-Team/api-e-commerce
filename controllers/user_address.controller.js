const db = require("../models");
const User_address = db.user_address;
const Op = db.Sequelize.Op;

// Create and Save an user's address
const createUserAddress = (req, res) => {
    // Validate request
    if (!req.body.order_id) {
        res.status(400).send({
            message: "Order ID can not be empty!"
        });
        return;
    }

    // Create an user's address
    const user_address = {
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        order_id: req.body.order_id,
    };

    // Save user's address in the database
    User_address.create(user_address)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user's address."
            });
        });
};

// Retrieve all order's contents content from the database.
const showAllUserAddress = (req, res) => {
    User_address.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user's address."
            });
        });
};

// Retrieve all order's contents with an order ID from the database.
const showUserAddressById = (req, res) => {
    const id = req.params.id

    User_address.findByPk(id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user's address with order ID=" + id
            });
        });
};

// Retrieve all order's contents with an order ID from the database.
const showUserAddressByOrderId = (req, res) => {
    const order_id = req.params.order_id

    User_address.findAll({ where: {order_id: order_id} })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user's address with order ID=" + order_id
            });
        });
};


module.exports = {
    createUserAddress,
    showAllUserAddress,
    showUserAddressById,
    showUserAddressByOrderId,
}
