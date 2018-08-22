const User = require('./model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SEED_USERS = [
  {
    email: 'alpha@example.com',
    password: 'alphapassword'
  },
  {
    email: 'beta@example.com',
    password: 'betapassword'
  },
  {
    email: 'gamma@example.com',
    password: 'gammapassword'
  }
]
const controller = {
  // ---------------------------------------------------------------------------
  seed: async (req, res, next) => {
    User.insertMany(SEED_USERS)
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      )
  },

  // ---------------------------------------------------------------------------
  get: async (req, res, next) => {
    User.find()
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  // ---------------------------------------------------------------------------
  getOne: async (req, res, next) => {
    User.findOne({
      _id: req.params.id
    })
      .then((err, user) => {
        res.status(200).send(user)
      })
      .catch(error =>
        res.status(400).send({
          message: error
        })
      )
  },

  // ---------------------------------------------------------------------------
  register: async (req, res, next) => {
    const { email, password } = req.body
    const saltRounds = 1

    bcrypt
      .hash(password, saltRounds)
      .then(hash => {
        console.log('hash:', hash)
        return {
          email,
          hash
        }
      })
      .then(newUser => {
        User.create(newUser)
          .then((err, user) => {
            res.send({
              message: `User is successfully registered`,
              email
            })
          })
          .catch(error =>
            res.status(400).send({
              message: error
            })
          )
      })
  },

  // ---------------------------------------------------------------------------
  login: async (req, res, next) => {
    const { 
        email,
        password
    } = req.body

    if (email && password) {
      User.findOne({ email })
      .then(user => {
        bcrypt.compare(password, user.hash).then(response => {
          if (response) {
            const token = jwt.sign(
              {
                iat: Math.floor(Date.now() / 1000) - 30,
                data: {
                  id: user._id // from mongodb
                }
              },
              process.env.JWT_SECRET || 'topsecret',
              {
                expiresIn: '1d'
              }
            )

            res.send({
              message: `User is successfully logged in`,
              token
            })
          } else {
            res.send({
              message: `Password is wrong`
            })
          }
        })
      })
    } else {
      res.status(400).send({
        message: `email and password are not provided`
      })
    }
  },

  // ---------------------------------------------------------------------------
  logout: async (req, res, next) => {
    res.send({
      message: `User is successfully logged out`
    })
  }
}

module.exports = controller