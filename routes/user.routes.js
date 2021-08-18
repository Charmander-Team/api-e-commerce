module.exports = app => {
    const user = require("../controllers/user.controller.js");

    const router = require("express").Router();

    // Create a new user
    router.post("/", user.createUser);

    // Retrieve all users
    router.get("/", user.showAllUsers);

    // Retrieve a single user with ID
    router.get("/:id", user.showUserById);

    // Update a user with ID
    router.put("/:id", user.updateUser);

    // Delete a user with ID
    router.delete("/:id", user.deleteUser);

    // Delete all users
    router.delete("/", user.deleteAllUsers);
    
    // Retrieve a single user with email and mdp
    router.post("/check", user.checkUser);
    
    // Retrieve a single user with email, mdp and token
    router.post("/check/token", user.checkUserToken);

    app.use('/api/user', router);
};
