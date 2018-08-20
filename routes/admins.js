var express = require('express');
var router = express.Router();

const adminController = require('../controller/admins')

// admin routes view
router.get('/', adminController.get)

router.post('/register', adminController.register)

router.post('/login', adminController.login)

router.put('/:id', adminController.update)

router.delete('/:id', adminController.remove)

router.post('/logout', adminController.logout)

module.exports = router;
