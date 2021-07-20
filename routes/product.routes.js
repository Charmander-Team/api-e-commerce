module.exports = app => {
    const product = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new product / card
    router.post("/", product.createCard);

    // Retrieve all products / card
    router.get("/", product.showAllCards);

    // Retrieve all published products
    //router.get("/published", products.findAllPublished);

    // Retrieve a single product / card with id
    router.get("/:id", product.showCardById);

    // Retrieve a single product / card with name
    router.get("/:name", product.showCardByName);

    // Update a product / card with id
    router.put("/:id", product.updateCard);

    // Delete a product / card with id
    router.delete("/:id", product.deleteCard);

    // Delete all products / cards
    router.delete("/", product.deleteAllCards);

    app.use('/api/product', router);
};
