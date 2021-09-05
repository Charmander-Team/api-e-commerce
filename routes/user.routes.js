const user = require("../controllers/user.controller.js");
module.exports = app => {
    const user = require("../controllers/user.controller.js");
    const router = require("express").Router();

    // Create a new user
    const { body } = require("express-validator");
    const db = require("../models");
    const User = db.user;

    router.post(
        "/",
        body('mail').custom(value => {
            return User.findOne({ where: { mail: value } })
                .then(user => {
                    if (user) {
                        return Promise.reject('E-mail already in use');
                    }
                });
        }),
        // (req, res) => {
        //     console.log(req['express-validator#contexts'][0]);
        //     return res.status(200).send({ msg: 'ntm' });
        // }
        user.createUser
    );

    // Retrieve all users
    router.get("/", user.showAllUsers);

    // Retrieve a single user with ID
    router.get("/:id", user.showUserById);

    // Retrieve a single user with mail
    router.get("/mail/:mail", user.getUserByMail);

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
