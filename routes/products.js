var express = require('express')
var router = express.Router()
const Product = require('../models').Product

router.get('/', function(req, res, next) {
  Product.findAll().then(product => {
    res.send(product);
  }).catch(error => {
    res.send(error);
  })
});

router.post('/', (req, res, next)=> {
  Product.create(req.body).then(product => {
    res.send(product);
  }).catch(error => {
    res.send(error);
  })
});

module.exports = router;
