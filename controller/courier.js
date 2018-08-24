const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { courier } = require("../models");

const courierController = {

  // get all courier
  get: (req, res, next)=> {
    courier.findAll().then(courier=> {
      res.status(200).send(courier)
    })
    .catch(error=> {
      res.status(500).send(error)
    })
  },

  // add courier
  add: (req, res, next) => {
    const {
      username,
      password,
      price,
      phone
    } = req.body;
    if (username && password && price) {
      const saltRounds = 5;
      bcrypt
        .hash(password, saltRounds)
        .then(hash => {
          console.log('HASH', hash);
          return {
            username,
            password: hash,
            price,
            phone
          }
        })
        .then(newCourier => {
          courier.build(newCourier)
            .save()
            .then(courier => {
              res.status(200).send({
                message: "Courier created",
                courier: {
                  id: courier.id,
                  username: courier.username,
                  password: courier.password,
                  price: courier.price,
                  phone: courier.phone
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
  },

  // update courier
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.username && req.body.password) {
      courier.update(
        {
          username: req.body.username,
          price: req.body.price,
          phone: req.body.phone,
          updatedAt: new Date()
        },
        {
          where: {
            id: id
          }
        }
      ).then(() => {
        res.status(200).send({
          message: "Courier updated"
        });
      });
    } else {
      res.status(416).send({
        message: "Please specify username and password"
      });
    }
  },

  // remove courier
  remove: (req, res, next) => {
    const id = Number(req.params.id);
    courier.destroy({
      where: { id: id }
    }).then(
      res.status(200).send({
        message: "Courier removed"
      })
    );
  },

  // courier login
  login: (req, res) => {
    const {
        username,
        password
    } = req.body

    if (username && password) {
      courier.findOne({ where: { username } })
      .then(courier => {
        if (courier) {
          bcrypt.compare(password, courier.password)
          .then(response => {
            if (response) {
              const token = jwt.sign(
                {
                  iat: Math.floor(Date.now() / 1000) - 30,
                  data: {
                    id: courier.id,
                    username: courier.username,
                  }
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1d"
                }
              );
              res.status(200).send({
                message: "Thanks for logged in",
                token
              });
            } else {
              res.status(400).send({
                message: "log in failed"
              });
            }
          });
        } else {
          res.status(400).send({
            message: "Check your login username"
          });
        }
      });
    } else {
      res.status(400).send({
        message: "Check your login credentials!"
      });
    }
  },

  // log out
  logout: (req, res, next) => {
    res.status(200).send({ message: "see ya" });
  }
};

module.exports = courierController;
