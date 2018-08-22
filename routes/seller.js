var express = require("express");
var router = express.Router();

const sellerController = require("../controller/sellers");

// add new seller
router.post("/register", sellerController.register);

// get all seller
router.get("/", sellerController.get);

// get data seller by id
router.get("/:id", sellerController.search);

// get data seller by id
router.post("/login", sellerController.login);

// search by usename
router.post("/search/:username", sellerController.searchByKeyword);

// edit seller data
router.put("/:id", sellerController.update);

// remove seller
router.delete("/:id", sellerController.remove);

module.exports = router;
