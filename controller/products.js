const jwt = require('jsonwebtoken')

const { Product } = require('../models')

const productController = {

  // validate user with token before update product
  validateUser: (req, res, next) => {
    jwt.verify(
      req.headers['x-access-token'],
      process.env.JWT_SECRET,
      (error, decode) => {
        if (error) {
          next(error, 'Token Expired!')
        } else {
          req.body.AdminId = decode.id
          next()
        }
      }
    )
  },

  // add product after Admin validated
  add: (req, res) => {
    return Product.create({
      idseller: req.body.idseller,
      idcategory: req.body.idcategory,
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      brand: req.body.brand,
      description: req.body.description,
      type: req.body.type,
      image: req.body.image,
      rating: req.body.rating,
      review: req.body.review
    })
      .then(newProduct => {
        res.json({
          status: 'success',
          message: 'Product added',
          data: newProduct
        })
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  // get all product data
  get: (req, res, next) => {
    Product.findAll()
      .then(product => {
        res.json(product)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

    // edit product
    update: (req, res, next)=> {
        const id = Number(req.params.id)
        if(req.body.name){
            Product.update({
                idseller: req.body.idseller,
                idcategory: req.body.idcategory,
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                brand: req.body.brand,
                description: req.body.description,
                type: req.body.type,
                image: req.body.image,
                rating: req.body.rating,
                review: req.body.review,
                updatedAt: new Date()
            },{
                where: { id: id }
            })
        .then(()=> {
            res.status(200).send({
                message: 'Product updated'
            })
        })
        } else {
            res.status(416).send({
                message: 'Please specify password and email!'
            })
        }
    },

  // get data by id
  search: (req, res, next) => {
    const id = Number(req.params.id)
    Product.findById(id)
      .then(product => {
        if (product) {
          res.send(product)
        } else {
          res.send({ message: 'Product not found' })
        }
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  // get data base on keyword
  searchByKeyword: (req, res, next) => {
    const keyword = req.query.q
    const Sequelize = require('sequelize')
    const Op = Sequelize.Op
    Product.findAll({
      where: {
        name: {
          [Op.like]: `%${keyword}`
        }
      }
    }).then(result => {
      console.log(result)
      if (result) {
        res.status(200).send({
          result
        })
      } else {
        res.status(404).send({
          message: 'Data not found'
        })
      }
    })
  },

  // remove product
  remove: (req, res, next) => {
    const id = Number(req.params.id)
    Product.destroy({
      where: { id: id }
    })
      .then(
        res.status(200).send({
          message: 'Product removed'
        })
      )
      .catch(error => {
        res.status(500).send({
          message: error
        })
      })
  }
}

module.exports = productController
