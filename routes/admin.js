var express = require('express');
var router = express.Router();

const adminController = require('../controller/admin')
const authController = require('../auth/controller')

// admin routes view
router.get('/', authController.checkToken, adminController.get)

router.post('/register', adminController.register)

router.post('/login', adminController.login)

router.get('/checktoken', authController.checkToken, authController.get)
// router.get('/check', adminController.isLoggedIn)

router.put('/:id', authController.checkToken, adminController.update)

router.delete('/:id', authController.checkToken, adminController.remove)

router.post('/logout', authController.checkToken, adminController.logout)

module.exports = router;
