var express = require('express');
var router = express.Router();

const courierController = require('../controller/courier');
const authController = require('../auth/controller')

// get all courier
router.get('/', courierController.get)

// check token curier
router.get('/checktoken', courierController.get)

// add new courier
router.post('/', authController.checkToken, courierController.add);

// edit single data, identified by id
router.put('/:id', authController.checkToken, courierController.update);

router.delete('/:id', authController.checkToken, courierController.remove);

router.post('/login', authController.checkToken, courierController.login);

module.exports = router;
