var express = require("express");
var router = express.Router();

const orderItemController = require("../controller/orderItem");

router.post("/add", orderItemController.add);

module.exports = router;
