const db = require("../models");
const Product = db.product;
const Category = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new product / card
const createCard = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
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
        price: req.body.price,
        image: req.body.image,
        stock: req.body.stock,
        condition: req.body.condition,
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
    Product.findAll()
        .then(async(data) => {
            for (const data_item of data) {
                const category_id = data_item.category_id;
                const data2 = await Category.findByPk(category_id);
                data_item.setDataValue("category_object", data2);
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

// Retrieve all products / cards with a category ID from the database.
const showAllCardsByCategory = (req, res) => {
    const category_id = req.params.category_id

    Product.findAll({ where: {category_id: category_id,stock:{[Op.gt]: 0}} })
        .then(async(data) => {
            for (const data_item of data) {
                const category_id = data_item.category_id;
                const data2 = await Category.findByPk(category_id);
                data_item.setDataValue("category_object", data2);
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products with category ID=" + category_id
            });
        });
};

// Retrieve all products / cards with a category ID from the database.
const showAllPokemonCardsByType = (req, res) => {
    const energy_type = req.params.energy_type

    Product.findAll({ where: {
        category_id: 2, // 2 => pokemon card
        energy_type: energy_type,
        stock:{[Op.gt]: 0}
    }})
        .then(async(data) => {
            for (const data_item of data) {
                const category_id = data_item.category_id;
                const data2 = await Category.findByPk(category_id);
                data_item.setDataValue("category_object", data2);
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Some error occurred while retrieving products with ${energy_type} type`
            });
        });
};

// Find a single product / card with an ID
const showCardById = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(async(data) => {
            const category_id = data.getDataValue("category_id");
            const data2 = await Category.findByPk(category_id)
            data.setDataValue("category_object", data2);
            res.status(200).send(data);
            })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving product with ID = ${id}`
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
                    message: "Product/Card was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete product with ID = ${id}. Maybe product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete product with ID = ${id}`
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
    showAllCardsByCategory,
    showAllPokemonCardsByType,
    deleteCard,
    deleteAllCards,
    updateCard,
}
