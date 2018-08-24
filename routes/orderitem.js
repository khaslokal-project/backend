var express = require("express");
var router = express.Router();

const orderItemController = require("../controller/orderitem");


// get all orderItem
router.get("/", orderItemController.get);

router.get("/detail/:id", orderItemController.getdetail);

// searh products by id
router.post("/", orderItemController.add);

module.exports = router;
