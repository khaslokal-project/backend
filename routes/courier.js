var express = require("express");
var router = express.Router();

const courierController = require("../controller/courier");

// add new courier
router.post("/add", courierController.add);

router.put("/:id", courierController.update);

router.delete("/:id", courierController.remove);

router.post("/login", courierController.login);

module.exports = router;
