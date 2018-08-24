const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { orderItem,
  Products,
  Courier
} = require("../models");

const orderItemController = {
  


  // get data
  getdetail: (req, res, next) => {
    const idproduct = req.params.idproduct;
    orderItem.findAll({
      
      where: { idproduct: idproduct }
    }).then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({
          message: "No data"
        });
      }
    });
  },
  
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
        idorder: req.body.idorder,
        qty: req.body.total
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
