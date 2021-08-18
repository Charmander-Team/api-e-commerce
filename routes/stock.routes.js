module.exports = app => {
    const stock = require("../controllers/stock.controller.js");

    const router = require("express").Router();

    // Create a new stock
    router.post("/", stock.createStock);

    // Retrieve all stocks
    router.get("/", stock.showAllStocks);

    // Retrieve a single stock with product ID
    router.get("/:product_id", stock.showStockOfProductId);

    // Update a stock with product ID
    router.put("/:product_id", stock.updateStockOfProductId);

    // Delete a stock with product ID
    router.delete("/:product_id", stock.deleteStockOfProductId);

    // Delete all stocks
    router.delete("/", stock.deleteAllStocks);

    app.use('/api/stock', router);
};
