const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Courier } = require("../models");

const courierController = {
  // add courier
  add: (req, res) => {
    const { username, password, price } = req.body;
    if (username && password && price) {
      const saltRounds = 5;
      bcrypt
        .hash(password, saltRounds)
        .then(hash => {
          console.log("HASH", hash);
          return {
            username,
            password: hash,
            price
          };
        })
        .then(newCourier => {
          Courier.build(newCourier)
            .save()
            .then(courier => {
              res.status(200).send({
                message: "Courier created",
                courier: {
                  username: courier.username,
                  password: courier.password,
                  price: courier.price
                }
              });
            })
            .catch(err => {
              res.status(500).send({
                message: err
              });
            });
        });
    } else {
      res.status(400).send({
        message: "Please fill up correctly"
      });
    }
  }
};
