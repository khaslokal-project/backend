var express = require('express');
var router = express.Router();

const courierController = require('../controller/courier');
const authController = require('../auth/controller')

// get all courier
router.get('/', courierController.get)

// add new courier
router.post('/', courierController.add);

// edit single data, identified by id
router.put('/:id', courierController.update);

router.delete('/:id', courierController.remove);

router.post('/login', courierController.login);

module.exports = router;
