var express = require("express");
var router = express.Router();

const productController = require("../controller/products");

router.post("/", productController.add);

router.get("/", productController.get);

router.get("/:id", productController.search);

router.put("/:id", productController.update);

router.delete("/:id", productController.remove);

router.get("/search", productController.searchByKeyword);

module.exports = router;
