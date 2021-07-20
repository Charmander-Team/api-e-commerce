module.exports = app => {
    const order_content = require("../controllers/order_content.controller.js");

    const router = require("express").Router();

    // Create an order's content
    router.post("/", order_content.createOrderContent);

    // Retrieve all orders' content
    router.get("/", order_content.showAllOrderContents);

    // Retrieve all order's content by order ID
    router.get("/order/:order_id", order_content.showAllOrderContentsByOrderId);

    // Update a order's content  with ID
    router.put("/:id", order_content.updateOrderContent);

    // Delete an order's content with ID
    router.delete("/:id", order_content.deleteOrderContent);

    // Delete all order's contents
    router.delete("/", order_content.deleteAllOrderContents);

    app.use('/api/order_content', router);
};
