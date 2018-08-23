const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { orderItem } = require("../models");

const orderItemController = {
  // get all orderItem
  get:(req, res, next)=> {
    orderItem.findAll()
    .then(orderitem=> {
      res.json(orderitem)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  // add cart items
  add: (req, res) => {
    return orderItem.create({
        idproduct: req.body.idproduct,
        idcourier: req.body.idcourier,
        total: req.body.total
      })
      .then(newOrderItem => {
        res.json({
          status: "success",
          message: "new order created",
          data: newOrderItem
        });
      })
      .catch(error => {
        res.status(400).send(error);
      });
  }
}


module.exports = orderItemController
