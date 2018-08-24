var express = require('express');
var router = express.Router();

const orderController = require('../controller/order');
const viewOrderController = require('../controller/vieworder')
const viewOrderItemController = require('../controller/vieworderitem')

// get all courier
router.get('/', orderController.get);

// add new courier
router.post('/', orderController.add);

// edit single data, identified by id
router.put('/updatestatus/:id', orderController.updatestatus);

router.get('/vieworder', viewOrderController.get);

router.get('/vieworderitem', viewOrderItemController.get)

// router.post('/login', courierController.login);

module.exports = router;

