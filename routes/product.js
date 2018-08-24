var express = require("express");
var router = express.Router();

const productController = require("../controller/product");
const authController = require('../auth/controller')


// get all product list
router.get("/", productController.get);

// searh products by id
router.get("/:id", productController.search);

// show product sort by productCategories table
router.get("/category/:idcategory", productController.searchByCategory);

// search product by keyword
router.post("/search/:name", productController.searchByKeyword);

router.post("/", authController.checkToken, productController.add);

router.put("/:id", authController.checkToken, productController.update);

router.delete("/:id", authController.checkToken, productController.remove);





module.exports = router;
