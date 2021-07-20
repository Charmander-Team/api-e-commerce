module.exports = app => {
    const user = require("../controllers/user.controller.js");

    const router = require("express").Router();

    // Create a new user
    router.post("/", user.createUser);

    // Retrieve all users
    router.get("/", user.showAllUsers);

    // Retrieve a single user / card with id
    router.get("/:id", user.showUserById);

    // Update a user with ID
    router.put("/:id", user.updateUser);

    // Delete a user with ID
    router.delete("/:id", user.deleteUser);

    // Delete all users
    router.delete("/", user.deleteAllUsers);

    app.use('/api/user', router);
};
