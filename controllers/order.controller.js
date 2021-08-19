const db = require("../models");
const Order = db.order;
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new order
const createOrder = (req, res) => {
    // Validate request
    if (!req.body.user_id) {
        res.status(400).send({
            message: "User_id can not be empty!"
        });
        return;
    }

    // Create an order
    const order = {
        user_id: req.body.user_id,
        paid: req.body.paid
    };

    // Save order in the database
    Order.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the order."
            });
        });
};

// Retrieve all orders from the database.
const showAllOrders = (req, res) => {
    Order.findAll()
        .then(async (data) => {
            for (const data_item of data) {
                const user_id = data_item.user_id;
                const data2 = await User.findByPk(user_id);
                delete data2.dataValues.password;
                delete data2.dataValues.hash;
                data_item.setDataValue("user_object", data2);
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving orders."
            });
        });
};

// Find a single order with an ID
const showOrderById = (req, res) => {
    const id = req.params.id;

    Order.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving order with ID=" + id
            });
        });
};

// Find orders with a user ID
const showOrdersByUserId = (req, res) => {
    const user_id = req.params.user_id;

    Order.findAll({where: {user_id: user_id}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving orders with user ID=" + user_id
            });
        });
};

// Update an order by the ID in the request
const updateOrder = (req, res) => {
    const id = req.params.id;

    Order.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update order with ID=${id}. Maybe order was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating order with ID=" + id
            });
        });
};

// Delete an order with the specified ID in the request
const deleteOrder = (req, res) => {
    const id = req.params.id;

    Order.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete order with id=${id}. Maybe order was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete order with ID=" + id
            });
        });
};

// Delete all orders from the database.
const deleteAllOrders = (req, res) => {
    Order.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} orders were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all orders."
            });
        });
};

module.exports = {
    createOrder,
    showAllOrders,
    showOrderById,
    showOrdersByUserId,
    deleteOrder,
    deleteAllOrders,
    updateOrder,
}
