var express = require('express');
var router = express.Router();

const adminController = require('../controller/admin')
const authController = require('../auth/controller')

// admin routes view
router.get('/', adminController.get)

router.post('/register', adminController.register)

router.post('/login', adminController.login)

router.get('/checktoken', authController.checkToken, adminController.get)
// router.get('/check', adminController.isLoggedIn)

router.put('/:id', adminController.update)

router.delete('/:id', adminController.remove)

router.post('/logout', adminController.logout)

module.exports = router;
