const db = require("../models");
const Order = db.order;
const User = db.user;
const Order_content = db.order_content;
const Product = db.product;
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
            res.status(201).send(data)
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
                delete data2.dataValues.id;
                delete data2.dataValues.password;
                delete data2.dataValues.admin;
                delete data2.dataValues.hash;
                delete data2.dataValues.createdAt;
                delete data2.dataValues.updatedAt;
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
        .then(async(data) => {
            const user_id = data.getDataValue("user_id");
            const data2 = await User.findByPk(user_id);
            delete data2.dataValues.id;
            delete data2.dataValues.password;
            delete data2.dataValues.admin;
            delete data2.dataValues.hash;
            delete data2.dataValues.createdAt;
            delete data2.dataValues.updatedAt;
            data.setDataValue("user_object", data2);

            const data3 = await Order_content.findAll({where: {order_id: id}});
            for (const data3_item of data3) {
                delete data3_item.dataValues.id;
                delete data3_item.dataValues.order_id;
                delete data3_item.dataValues.createdAt;
                delete data3_item.dataValues.updatedAt;

                const product_id = data3_item.product_id;
                const data4 = await Product.findByPk(product_id);
                delete data4.dataValues.id;
                delete data4.dataValues.description;
                delete data4.dataValues.energy_type;
                delete data4.dataValues.createdAt;
                delete data4.dataValues.updatedAt;
                data3_item.setDataValue("product_object", data4);
            }
            data.setDataValue("order_content", data3);

            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving order with ID = ${id}`
            });
        });
};

// Find orders with a user ID
const showOrdersByUserId = (req, res) => {
    const user_id = req.params.user_id;
    Order.findAll({where: {user_id: user_id}})
        .then(async (orders) => {
            for (const order of orders) {
                delete order.dataValues.user_id;
                const order_id = order.id;
                const orders_content = await Order_content.findAll({where: {order_id: order_id}});
                for (const order_content of orders_content) {
                    delete order_content.dataValues.id;
                    delete order_content.dataValues.order_id;
                    delete order_content.dataValues.createdAt;
                    delete order_content.dataValues.updatedAt;
                    order.setDataValue("order_content", order_content);
                }
            }
            res.status(200).send(orders);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving orders with user ID = ${user_id}`
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
                    message: `Cannot update order with ID = ${id}. Maybe order was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating order with ID = ${id}`
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
                    message: `Cannot delete order with ID = ${id}. Maybe order was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete order with ID = ${id}`
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
