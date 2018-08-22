var express = require("express");
var router = express.Router();

const productController = require("../controller/product");

router.post("/", productController.add);

router.get("/", productController.get);

router.get("/:id", productController.search);

router.put("/:id", productController.update);

router.delete("/:id", productController.remove);

router.post("/search/:name", productController.searchByKeyword);

router.get("/category/:idcategory", productController.searchByCategory);

module.exports = router;
