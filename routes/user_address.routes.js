module.exports = app => {
    const user_address = require("../controllers/user_address.controller.js");

    const router = require("express").Router();

    // Create a new user address
    router.post("/", user_address.createUserAddress);

    // Retrieve all user address
    router.get("/", user_address.showAllUserAddress);

    // Retrieve a user address with an ID
    router.get("/:id", user_address.showUserAddressById);

    // Retrieve a user address with an order ID
    router.get("/order/:order_id", user_address.showUserAddressByOrderId);

    app.use('/api/user_address', router);
};
