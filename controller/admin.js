const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Admin } = require("../models");

const adminController = {

  validateUser: (req, res, next) => {
    jwt.verify(
      req.header("x-access-token"),
      process.env.JWT_SECRET,
      (error, decode) => {
        if (error) {
          next(error, "Token Expired!");
        } else {
          req.body.AdminId = decode.id;
          next();
        }
      })
  },

  // get all Admin list
  get: (req, res, next) => {
    console.log(req.decoded.data.id)
    Admin.findAll()
      .then(admin => {
        res.status(200).send(admin);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  },

  // register new admin
  register: (req, res, next) => {
    const {
      username,
      firstname,
      lastname,
      password,
      email
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
            password: hash,
            email
          };
        })
        .then(newAdmin => {
          Admin.build(newAdmin)
            .save()
            .then(admin => {
              res.status(200).send({
                message: "Admin Created",
                admin: {
                  id: admin.id,
                  username: admin.username,
                  password: admin.password,
                  email: admin.email
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

  // update Admin
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.password && req.body.email) {
      Admin.update({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        updatedAt: new Date()
      }, {
        where: {
          id: id
        }
      }).then(() => {
        res.status(200).send({
          message: "Admin updated"
        });
      });
    } else {
      res.status(416).send({
        message: "Please specify password and email!"
      });
    }
  },

  // remove Admin
  remove: (req, res, next) => {
    const id = Number(req.params.id);
    Admin.destroy({
      where: {
        id: id
      }
    }).then(
      res.status(200).send({
        message: "Admin removed"
      })
    );
  },

  login: (req, res) => {
    const {
      username,
      password
    } = req.body

    if (username && password) {
      Admin.findOne({
          where: {
            username
          }
        })
        .then(admin => {
          if (admin) {
            bcrypt.compare(password, admin.password)
              .then(response => {
                if (response) {
                  const token = jwt.sign({
                      iat: Math.floor(Date.now() / 1000) - 30,
                      data: {
                        id: admin.id,
                        username: admin.username,
                        email: admin.email
                      }
                    },
                    process.env.JWT_SECRET, {
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

  // check logged in (method get)
  isLoggedIn: (req, res, next) => {
    const header = req.header('x-access-token')
    console.log(header);
    

    jwt.verify(
      req.header('x-access-token'),
      process.env.JWT_SECRET,
      (error, decode) => {
        if (error) {
          res.send(false)
        } else {
          req.body.id = decode.id
          res.send(true)
        }
      })
  },

  // log out
  logout: (req, res, next) => {
    res.status(200).send({
      message: "see ya"
    });
  }
};

module.exports = adminController;