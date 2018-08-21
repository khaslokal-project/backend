var express = require("express");
var router = express.Router();

const categoryController = require("../controller/categoryquery");

router.get("/", categoryController.searchByCategory);

module.exports = router;
