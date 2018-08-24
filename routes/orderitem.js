var express = require("express");
var router = express.Router();

const orderItemController = require("../controller/orderItem");

<<<<<<< HEAD
router.post("/add", orderItemController.add);
=======

// get all orderItem
router.get("/", orderItemController.get);

router.get("/detail/:id", orderItemController.getdetail);

// searh products by id
router.post("/", orderItemController.add);
>>>>>>> cfbee034a65655a8cbc5ce64560c59760c24bc62

module.exports = router;
