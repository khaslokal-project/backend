const { Userorder } = require("../models");

const orderController = {
  // add new record
  add: (req, res) => {
    return Userorder.create({
      name: req.body.name,
      item: req.body.item,
      price: req.body.price,
      subtotal: req.body.subtotal,
      shipping_cost: req.body.shippingcost
    })
      .then(newRecord => {
        res.json({
          status: "success",
          message: "Record added",
          data: newRecord
        });
      })
      .catch(error => {
        res.status(400).send(error);
      });
  }
};

module.exports = orderController;
