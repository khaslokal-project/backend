var express = require("express");
var router = express.Router();

const orderItemController = require("../controller/orderItem");


// get all orderItem
router.get("/", orderItemController.get);

// searh products by id
router.post("/", orderItemController.add);

module.exports = router;
