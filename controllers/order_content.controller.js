const db = require("../models");
const Order_content = db.order_content;
const Op = db.Sequelize.Op;

// Create and Save an order's content
const createOrderContent = (req, res) => {
    // Validate request
    if (!req.body.product_id) {
        res.status(400).send({
            message: "Product ID can not be empty!"
        });
        return;
    }

    // Create an order's content
    const order_content = {
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,

    };

    // Save order's content in the database
    Order_content.create(order_content)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the order's content."
            });
        });
};

// Retrieve all order's contents content from the database.
const showAllOrderContents = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Order_content.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving order's contents."
            });
        });
};

// Retrieve all order's contents with an order ID from the database.
const showAllOrderContentsByOrderId = (req, res) => {
    const order_id = req.params.order_id

    Order_content.findAll({ where: {order_id: order_id} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving order's content with order ID=" + order_id
            });
        });
};

// Update an order's content by the ID in the request
const updateOrderContent = (req, res) => {
    const id = req.params.id;

    Order_content.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order's content was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update order's content with ID=${id}. Maybe order's content was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating order's content with ID=" + id
            });
        });
};

// Delete an order's content with the specified ID in the request
const deleteOrderContent = (req, res) => {
    const id = req.params.id;

    Order_content.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order's content was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete order's content with ID=${id}. Maybe order's content was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete order's content with ID=" + id
            });
        });
};

// Delete all order's content from the database.
const deleteAllOrderContents = (req, res) => {
    Order_content.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} order's content were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all order's content."
            });
        });
};

module.exports = {
    createOrderContent,
    showAllOrderContents,
    showAllOrderContentsByOrderId,
    updateOrderContent,
    deleteOrderContent,
    deleteAllOrderContents
}
