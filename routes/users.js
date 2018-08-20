var express = require("express");
var router = express.Router();

const userController = require("../controller/users");

// add new user
router.post("/register", userController.register);

// get all user
router.get("/", userController.get);

// get all data user by id
router.get("/:id", userController.search);

//get data user by id
router.post("/login", userController.login);

// edit user data
router.put("/:id", userController.update);

// remove user
router.delete("/:id", userController.remove);

module.exports = router;
