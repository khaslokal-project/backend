var express = require('express');
var router = express.Router();

const adminController = require('../controller/admins')

// admin routes view
router.get('/', adminController.get)

router.post('/', adminController.register)

router.post('/', adminController.login)

router.put('/:id', adminController.update)

router.delete('/:id', adminController.remove)

module.exports = router;
