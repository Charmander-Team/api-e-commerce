const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new product / card
const createCard = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a product / card
    const product = {
        ref: req.body.ref,
        category_id: req.body.category_id,
        name: req.body.name,
        description: req.body.description,
        energy_type: req.body.energy_type,
        date: req.body.date,
        bid: req.body.bid,
        price: req.body.price,
        image: req.body.image
    };

    // Save product in the database
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the product."
            });
        });
};

// Retrieve all products / cards from the database.
const showAllCards = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Product.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving product."
            });
        });
};

// Find a single product / card with an ID
const showCardById = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving product with ID=" + id
            });
        });
};

// Find a single product / card with an ID
const showCardByName = (req, res) => {
    const name = req.params.name;

    Product.findByPk(name)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving product with ID=" + name
            });
        });
};

// Update a product / card by the ID in the request
const updateCard = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update product with ID=${id}. Maybe product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating product with id=" + id
            });
        });
};

// Delete a product / card with the specified ID in the request
const deleteCard = (req, res) => {
    const id = req.params.id;

    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete product with ID=${id}. Maybe product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete product with ID=" + id
            });
        });
};

// Delete all products from the database.
const deleteAllCards = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} products were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all products."
            });
        });
};

module.exports = {
    createCard,
    showAllCards,
    showCardById,
    showCardByName,
    deleteCard,
    deleteAllCards,
    updateCard,
}
