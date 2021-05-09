module.exports = app => {
    const product = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", product.createCard);

    // Retrieve all products
    router.get("/", product.showAllCards);

    // Retrieve all published products
    //router.get("/published", products.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", product.showCardById);

    // Retrieve a single Tutorial with name
    router.get("/:name", product.showCardByName);

    // Update a Tutorial with id
    router.put("/:id", product.updateCard);

    // Delete a Tutorial with id
    router.delete("/:id", product.deleteCard);

    // Delete all products
    router.delete("/", product.deleteAllCards);

    app.use('/api/product', router);
};
