module.exports = app => {
    const category = require("../controllers/category.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", category.createCategory);

    // Retrieve all products
    router.get("/", category.showAllCategory);

    // Retrieve all published products
    //router.get("/published", products.findAllPublished);

    // Retrieve a single Tutorial with id
    //router.get("/:id", category.showCardById);

    // Retrieve a single Tutorial with name
    //router.get("/:name", category.showCardByName);

    // Update a Tutorial with id
    //router.put("/:id", category.updateCard);

    // Delete a Tutorial with id
    //router.delete("/:id", category.deleteCard);

    // Delete all categories
    //router.delete("/", category.deleteAllCards);

    app.use('/api/category', router);
};
