var express = require('express');
var router = express.Router();

const categoryController = require('../controller/categoryquery');

<<<<<<< HEAD
router.get("/", categoryController.searchByCategory);
=======
router.post('/search', categoryController.search);
>>>>>>> 37ff9bb3df6adaa25f625d40a5934328fa868c0b

module.exports = router;
