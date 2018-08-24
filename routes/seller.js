var express = require("express");
var router = express.Router();

const sellerController = require("../controller/seller");
const authController = require('../auth/controller')


// get all seller
router.get("/", sellerController.get);

// get data seller by id
router.get("/category/:id", sellerController.search);

// add new seller
router.post("/register", authController.checkToken, sellerController.register);

// edit seller data
router.put("/:id", authController.checkToken, sellerController.update);

// get data seller by id
router.post("/login", authController.checkToken, sellerController.login);

// search by username
router.post("/search/:username", sellerController.searchByKeyword);

// edit seller data
router.put("/:id", sellerController.update);

// remove seller
router.delete("/:id", sellerController.remove);

module.exports = router;
