var express = require("express");
var router = express.Router();

const orderController = require("../controller/userorder");

router.post("/add", orderController.add);

module.exports = router;
