const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new category
const createCategory = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a category
    const category = {
        name: req.body.name,
        image: req.body.image
    };

    // Save category in the database
    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the category."
            });
        });
};

// Retrieve all categories from the database.
const showAllCategory = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Category.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving categories."
            });
        });
};

// Find a single category with an ID
const showCategoryById = (req, res) => {
    const id = req.params.id;

    Category.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving category with id = ${id}`
            });
        });
};

// Update a category by the ID in the request
const updateCategory = (req, res) => {
    const id = req.params.id;

    Category.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update category with id = ${id}. Maybe category was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating category with id = ${id}`
            });
        });
};

// Delete a category with the specified ID in the request
const deleteCategory = (req, res) => {
    const id = req.params.id;

    Category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete category with id = ${id}. Maybe category was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete category with id = ${id}`
            });
        });
};

// Delete all categories from the database.
const deleteAllCategories = (req, res) => {
    Category.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} categories were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all categories."
            });
        });
};


module.exports = {
    createCategory,
    showAllCategory,
    showCategoryById,
    deleteCategory,
    deleteAllCategories,
    updateCategory,
}
