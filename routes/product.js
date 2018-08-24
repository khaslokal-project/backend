var express = require("express");
var router = express.Router();

const productController = require("../controller/product");
const authController = require('../auth/controller')


// get all product list
router.get("/", productController.get);

// get products by id
router.get("/:id", productController.getbyid);

// show product sort by productCategories table
router.get("/category/:idcategory", productController.searchByCategory);

// search product by keyword
router.post("/search/:name", productController.searchByKeyword);

router.post("/", productController.add);

router.put("/:id", authController.checkToken, productController.update);

router.delete("/:id", authController.checkToken, productController.remove);


module.exports = router;
