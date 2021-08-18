const db = require("../models");
const Stock = db.stock;
const Op = db.Sequelize.Op;

// Create and Save a new stock
const createStock = (req, res) => {
    // Validate request
    if (!req.body.product_id) {
        res.status(400).send({
            message: "Product ID can not be empty!"
        });
        return;
    }

    // Create a stock
    const stock = {
        product_id: req.body.product_id,
        quantity: req.body.quantity
    };

    // Save stock in the database
    Stock.create(stock)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the stock."
            });
        });
};

// Retrieve all stocks from the database.
const showAllStocks = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Stock.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving stocks."
            });
        });
};

// Find a stock with a product ID
const showStockOfProductId = (req, res) => {
    const product_id = req.params.product_id;

    Stock.findOne( { where: {product_id: product_id} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving stock with product ID = ${product_id}`
            });
        });
};

// Update a stock by the ID in the request
const updateStockOfProductId = (req, res) => {
    const product_id = req.params.product_id;

    Stock.update(req.body, {
        where: { product_id: product_id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Stock was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update stock with product ID = ${product_id}. Maybe stock was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating stock with product ID = ${product_id}`
            });
        });
};

// Delete a stock with the specified product ID in the request
const deleteStockOfProductId = (req, res) => {
    const product_id = req.params.product_id;

    Stock.destroy({
        where: { product_id: product_id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Stock was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete stock with product ID = ${product_id}. Maybe stock was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete stock with product ID = ${product_id}`
            });
        });
};

// Delete all stocks from the database.
const deleteAllStocks = (req, res) => {
    Stock.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} stocks were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all stocks."
            });
        });
};


module.exports = {
    createStock,
    showAllStocks,
    showStockOfProductId,
    deleteStockOfProductId,
    deleteAllStocks,
    updateStockOfProductId,
}
