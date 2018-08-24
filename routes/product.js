var express = require("express");
var router = express.Router();

const productController = require("../controller/product");

router.get("/", productController.get);

// searh products by id
router.get("/:id", productController.search);

router.post("/", productController.validateUser, productController.add);

router.put("/:id", productController.validateUser, productController.update);

router.delete("/:id", productController.remove);

// search product by keyword
router.post("/search/:name", productController.searchByKeyword);

// show product sort by productCategories table
router.get("/category/:idcategory", productController.searchByCategory);

module.exports = router;
