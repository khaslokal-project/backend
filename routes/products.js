var express = require('express')
var router = express.Router()

const productController = require('../controller/products')

router.post('/', productController.add)

router.get('/', productController.get)

router.get('/:id', productController.search)

router.delete('/:id', productController.remove)

module.exports = router;
