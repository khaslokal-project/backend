const jwt = require('jsonwebtoken')

const { Product } = require('../models')

const productController = {
    // validate user with token before update product
    validateUser: (req, res, next) => {
        jwt.verify(req.headers['x-access-token'], process.env.JWT_SECRET,
            (error, decode) => {
                if (error) {
                    next(error, 'Token Expired!')
                } else {
                    req.body.AdminId = decode.id
                    next()
                }
        })
    },

    // add product after Admin validated
    add: (req, res)=> {
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
        .then(newProduct=> {
            res.json({
                'status':'success',
                'message':'Product added',
                'data': newProduct
            })
        })
        .catch(error=> {
            res.status(400).send(error)
        })
    },

    // get all product data
    get: (req, res, next)=> {
        Product.findAll().then(product=>{
            res.json(product)
        })
        .catch(error=> {
            res.status(400).send(error)
        })
    },

    // get data by id
    search: (req, res, next)=> {
        const id = Number(req.params.id)
        Product.findById(id).then(product=> {
            if(product){
                res.send(product)
            } else {
                res.send({ message: 'Product not found' })
            }
        })
        .catch(error=> {
            res.status(400).send(error)
        })
    },

    // remove product
    remove: (req, res, next)=> {
        const id = Number(req.params.id)
        Product.destroy({
            where: { id: id}
        })
        .then(res.status(200).send({
            message: 'Product removed'
        }))
        .catch(error=> {
            res.status(500).send({
                message: error
            })
        })
    }
}

module.exports = productController
