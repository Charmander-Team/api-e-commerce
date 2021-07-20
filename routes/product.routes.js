module.exports = app => {
    const product = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new product / card
    router.post("/", product.createCard);

    // Retrieve all products / cards
    router.get("/", product.showAllCards);

    // Retrieve all products / cards by a category ID (pokemon[2] or trainer[1] or energy[3])
    router.get("/category/:category_id", product.showAllCardsByCategory);

    // Retrieve all products / cards by a energy type
    router.get("/type/:energy_type", product.showAllPokemonCardsByType);

    // Retrieve a single product / card with ID
    router.get("/:id", product.showCardById);

    // Retrieve a single product / card with name
    router.get("/name/:name", product.showCardByName);

    // Update a product / card with ID
    router.put("/:id", product.updateCard);

    // Delete a product / card with ID
    router.delete("/:id", product.deleteCard);

    // Delete all products / cards
    router.delete("/", product.deleteAllCards);

    app.use('/api/product', router);
};
