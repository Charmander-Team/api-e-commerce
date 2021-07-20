module.exports = app => {
    const order = require("../controllers/order.controller.js");

    const router = require("express").Router();

    // Create a new order
    router.post("/", order.createOrder);

    // Retrieve all orders
    router.get("/", order.showAllOrders);

    // Retrieve a single order with ID
    router.get("/:id", order.showOrderById);

    // Retrieve all orders with a User ID
    router.get("/user/:user_id", order.showOrdersByUserId);

    // Update a order with ID
    router.put("/:id", order.updateOrder);

    // Delete a order with ID
    router.delete("/:id", order.deleteOrder);

    // Delete all orders
    router.delete("/", order.deleteAllOrders);

    app.use('/api/order', router);
};
