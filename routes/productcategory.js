var express = require('express')
var router = express.Router()

const productCategoryController = require('../controller/productcategory')

// get all categories
router.get('/', productCategoryController.get)

// get data by id category
router.get('/:id', productCategoryController.getOneById)

// post data to category
router.post('/', productCategoryController.create)

// post data to category
router.put('/:id', productCategoryController.update)

// delete data to category
router.delete('/:id', productCategoryController.remove)

module.exports = router
