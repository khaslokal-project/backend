var express = require("express")
var router = express.Router()

const admincourierController = require("../controller/admincourier")

// show all data
router.get('/', admincourierController.get)

// add new data
router.post('/', admincourierController.add)

// update data
router.put('/', admincourierController.update)

module.exports = router
