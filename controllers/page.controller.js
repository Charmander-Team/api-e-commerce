const db = require("../models");
const Page = db.page;
const Op = db.Sequelize.Op;

// Create and Save a new page
const createPage = (req, res) => {
    // Validate request
    if (!req.body.navbar_title) {
        res.status(400).send({
            message: "Navbar Title can not be empty!"
        });
        return;
    }

    // Create a page
    const page = {
        navbar_title: req.body.navbar_title,
        page_color: req.body.page_color,
        text_color: req.body.text_color,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        link: req.body.link,
        display: req.body.display
    };

    // Save page in the database
    Page.create(page)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the page."
            });
        });
};

// Retrieve all pages from the database.
const showAllPages = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Page.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving pages."
            });
        });
};

// Find a single page with an id
const showPageById = (req, res) => {
    const id = req.params.id;

    Page.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving page with id = ${id}`
            });
        });
};

// Update a page by the id in the request
const updatePage = (req, res) => {
    const id = req.params.id;

    Page.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Page was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update page with id = ${id}. Maybe page was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating page with id = ${id}`
            });
        });
};

// Delete a page with the specified id in the request
const deletePage = (req, res) => {
    const id = req.params.id;

    Page.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Page was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete page with id = ${id}. Maybe page was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete page with id = ${id}`
            });
        });
};

// Delete all pages from the database.
const deleteAllPages = (req, res) => {
    Page.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} pages were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all pages."
            });
        });
};


module.exports = {
    createPage,
    showAllPages,
    showPageById,
    deletePage,
    deleteAllPages,
    updatePage,
}
