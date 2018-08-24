const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require("../models");

const userController = {

  // get all User list
  get: (req, res, next) => {
    User.findAll()
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  // register new user
  register: (req, res, next) => {
    const {
      username,
      firstname,
      lastname,
      address,
      password,
      email,
      phone
    } = req.body;
    if (username && password && email) {
      const saltRounds = 5;
      bcrypt
        .hash(password, saltRounds)
        .then(hash => {
          console.log("HASH", hash);
          return {
            username,
            firstname,
            lastname,
            address,
            password: hash,
            email,
            phone
          };
        })
        .then(newUser => {
          User.build(newUser)
            .save()
            .then(user => {
              res.status(200).send({
                message: "User Created",
                user: {
                  id: user.id,
                  username: user.username,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  address: user.address,
                  password: user.password,
                  email: user.email,
                  phone: user.phone
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

  // update User
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.username) {
      User.update(
        {
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          address: req.body.address,
          email: req.body.email,
          phone: req.body.phone,
          updatedAt: new Date()
        },
        {
          where: { id: id }
        }
      ).then(() => {
        res.status(200).send({
          message: "User updated"
        });
      });
    } else {
      res.status(416).send({
        message: "Please specify password and email!"
      });
    }
  },

  // remove User
  remove: (req, res, next) => {
    const id = Number(req.params.id);
    User.destroy({
      where: { id: id }
    }).then(
      res.status(200).send({
        message: "User removed"
      })
    );
  },

  // search user by id
  search: (req, res, next) => {
    const id = Number(req.params.id);
    User.findbyId(id)
      .then(user => {
        if (user) {
          res.search(user);
        } else {
          res.send({ message: "User not found" });
        }
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  login: (req, res) => {
    const { 
      username,
      password 
    } = req.body

    if (username && password) {
      User.findOne({ where: { username } })
      .then(user => {
        if(user){
          bcrypt.compare(password, user.password)
          .then(response => {
            if (response) {
              const token = jwt.sign(
                {
                  iat: Math.floor(Date.now() / 1000) - 30,
                  data: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                  }
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1d"
                }
              );
              res.status(200).send({
                // message: "Thanks for logged in",
                id: user.id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                address: user.address,
                email: user.email,
                phone: user.phone,
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
            message: "Check your username"
          });
        }
      })
    } else {
      res.status(400).send({
        message: "Check your login credentials!"
      });
    }
  },

  // log out
  logout: (req, res, nect) => {
    res.status(200).send({ message: "see ya" });
  }
};

module.exports = userController;
