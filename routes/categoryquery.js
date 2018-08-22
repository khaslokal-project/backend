var express = require("express");
var router = express.Router();

const categoryController = require("../controller/categoryquery");

router.get("/", categoryController.searchByCategory);
router.post('/search', categoryController.search);

module.exports = router;
