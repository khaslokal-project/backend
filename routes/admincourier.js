var express = require("express");
var router = express.Router();

const admincourierController = require("../controller/admincourier");

// add new data
router.post("/print", admincourierController.add);

module.exports = router;
