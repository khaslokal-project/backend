const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Courier } = require("../models");

const courierController = {

  // validate user with token before get all data
  // validateCourier: (req, res, next)=> {
  //   jwt.verify(
  //     req.header['x-access-token'],
  //     process.env.JWT_SECRET,
  //     (error, decode)=> {
  //       if(error){
  //         next(error, 'Token Expired!');
  //       } else {
  //         req.body.CourierId = decode.id
  //         next()
  //       }
  //     }
  //   )
  // },

  // get all courier
  get: (req, res, next)=> {
    Courier.findAll().then(courier=> {
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
      price
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
            price
          }
        })
        .then(newCourier => {
          Courier.build(newCourier)
            .save()
            .then(courier => {
              res.status(200).send({
                message: "Courier created",
                courier: {
                  id: courier.id,
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
  },

  // update courier
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.username && req.body.password) {
      Courier.update(
        {
          username: req.body.username,
          price: req.body.price,
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
    Courier.destroy({
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
      Courier.findOne({ where: { username } })
      .then(courier => {
        const token = jwt.sign({
          iat: Math.floor(Date.now() / 1000) - 30,
          data: {
            id: courier.id,
            username: courier.username,
            email: courier.email
          }
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        bcrypt.compare(password, courier.password)
        .then(response => {
          if (response) {
            res.status(200).send({
              message: "Thanks for logged in",
              token
            })
          } else {
            res.status(400).send({
              message: 'log in failed'
            })
          }
        })
      })
    } else {
      res.status(400).send({
        message: "Check your password"
      });
    }
  },

  // log out
  logout: (req, res, next) => {
    res.status(200).send({ message: "see ya" });
  }
};

module.exports = courierController;
