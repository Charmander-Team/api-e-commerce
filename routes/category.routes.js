module.exports = app => {
    const category = require("../controllers/category.controller.js");

    const router = require("express").Router();

    // Create a new category
    router.post("/", category.createCategory);

    // Retrieve all categories
    router.get("/", category.showAllCategory);

    // Retrieve a single category with id
    router.get("/:id", category.showCategoryById);

    // Retrieve a single category with name
    router.get("/:name", category.showCategoryByName);

    // Update a category with id
    router.put("/:id", category.updateCategory);

    // Delete a category with id
    router.delete("/:id", category.deleteCategory);

    // Delete all categories
    router.delete("/", category.deleteAllCategories);

    app.use('/api/category', router);
};
