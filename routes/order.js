var express = require('express');
var router = express.Router();

const orderController = require('../controller/order');
const viewOrderController = require('../controller/vieworder')
const viewOrderItemController = require('../controller/vieworderitem')
const viewOrderCompleteController = require('../controller/viewordercomplete')

// get all courier
router.get('/', orderController.get);

// add new courier
router.post('/', orderController.add);

// edit single data, identified by id
router.put('/updatestatus/:id', orderController.updatestatus);

router.get('/vieworder', viewOrderController.get);

router.get('/vieworderitem/:id', viewOrderItemController.getbyid);

router.get('/vieworderitem', viewOrderItemController.get)

router.get('/viewordercomplete', viewOrderCompleteController.get);

router.get('/viewordercomplete/:id', viewOrderCompleteController.getbyid);

router.delete('/:id', orderController.remove)

module.exports = router;

