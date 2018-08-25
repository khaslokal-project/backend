var express = require('express');
var router = express.Router();

const userController = require('../controller/user');
const authController = require('../auth/controller')


// get all user
router.get('/', userController.get);

// check token
// router.get('/checktoken', (req, res,next)=> {
//     res.send(authController.checkToken)
//     res.send(userController.get)
// })

router.get('/checktoken', userController.getloggedin)

// add new user
router.post('/register', userController.register);

// get all data user by id
router.get('/:id', userController.search);

//get data user by id
router.post('/login', userController.login);

//log out account
router.post('/logout', userController.logout);

// edit user data
router.put('/:id', userController.update);

// remove user
router.delete('/:id', userController.remove);

module.exports = router;
