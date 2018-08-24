var express = require('express');
var router = express.Router();

const orderController = require('../controller/order');

// get all courier
router.get('/', orderController.get)

// add new courier
router.post('/', orderController.add);

// edit single data, identified by id
// router.put('/:id', courierController.update);

// router.delete('/:id', courierController.remove);

// router.post('/login', courierController.login);

module.exports = router;

