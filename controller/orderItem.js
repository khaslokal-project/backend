const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { orderItem } = require("../models");

const orderItemController = {
  // add cart items
  add: (req, res) => {
    return orderItem
      .create({
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
  },

  get: (req, res) => {}
};

module.exports = orderItemController;
