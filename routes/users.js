var express = require('express');
var router = express.Router();

const User = require('../models').User

router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    res.send(users);
  }).catch(error => {
    res.send(error);
  })
});

router.post('/', function(req, res, next) {
  User.create(req.body).then(user => {
    res.send(user);
  }).catch(error => {
    res.send(error);
  })
});

module.exports = router;
