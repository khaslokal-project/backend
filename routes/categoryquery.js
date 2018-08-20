var express = require("express");
var router = express.Router();

const categoryController = require("../controller/categoryquery");

router.get("/search", categoryController.searchByCategory);

module.exports = router;
