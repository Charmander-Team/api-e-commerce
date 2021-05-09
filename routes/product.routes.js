module.exports = app => {
    const products = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", products.createCard);

    // Retrieve all products
    router.get("/", products.showAllCards);

    // Retrieve all published products
    //router.get("/published", products.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", products.showCardById);

    // Retrieve a single Tutorial with name
    router.get("/:name", products.showCardByName);

    // Update a Tutorial with id
    router.put("/:id", products.updateCard);

    // Delete a Tutorial with id
    router.delete("/:id", products.deleteCard);

    // Delete all products
    router.delete("/", products.deleteAllCards);

    app.use('/api/products', router);
};
