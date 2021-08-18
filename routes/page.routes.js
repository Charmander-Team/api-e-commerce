module.exports = app => {
    const page = require("../controllers/page.controller.js");

    const router = require("express").Router();

    // Create a new page
    router.post("/", page.createPage);

    // Retrieve all pages
    router.get("/", page.showAllPages);

    // Retrieve a single page with id
    router.get("/:id", page.showPageById);

    // Update a page with id
    router.put("/:id", page.updatePage);

    // Delete a page with id
    router.delete("/:id", page.deletePage);

    // Delete all pages
    router.delete("/", page.deleteAllPages);

    app.use('/api/page', router);
};
