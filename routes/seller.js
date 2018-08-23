var express = require("express");
var router = express.Router();

const sellerController = require("../controller/seller");

// add new seller
router.post("/register", sellerController.register);

// get all seller
router.get("/", sellerController.get);

// get all seller
// router.get("/:id", sellerController.get);

// edit seller data
router.put("/:id", sellerController.update);

// get data seller by id
router.get("/category/:id", sellerController.search);

// get data seller by id
router.post("/login", sellerController.login);

// search by username
router.post("/search/:username", sellerController.searchByKeyword);

// search seller product
router.post("/:");



// remove seller
router.delete("/:id", sellerController.remove);

module.exports = router;
