// const bodyParser = require('body-parser')

// const products = require('../models/products')
const db = require('../dbconfig/sequelize')
const products = db.products

module.exports = (app)=> {

    // get home
    app.get('/', (req, res)=> {
        res.send('khaslokal api')
    })
    // get all product
    app.get('/api/products', (req, res)=> {
        products.findAll().then(products=> {
            res.json(products)
        })
    })

    // post data to product with validation
    const {
        check,
        validationResult
    } = require('express-validator/check')

    app.post('/api/products/add', [
        check('nameProduct').isLength({
            min: 5
        }),
        check('priceProduct').isLength({
            min: 4
        }),
        check('stockProduct').isLength({
            min: 1
        }),
        check('brandProduct').isLength({
            min: 4
        }),
        check('typeProduct').isLength({
            min: 4
        })
    ], (res, req)=> {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array()
            })
        }

        // exports.upload = (res, req)=> {
            products.create({
                idproduct: req.body.idproduct,
                nameProduct: req.body.nameProduct,
                priceProduct: req.body.priceProduct,
                stockProduct: req.body.stockProduct,
                brandProduct: req.body.brandProduct,
                descriptionProduct: req.body.descriptionProduct,
                typeProduct: req.body.typeProduct,
                imageProduct: type.body.typeProduct,
                ratingProduct: req.body.ratingProduct,
                reviewProduct: req.body.reviewProduct
            })
            .then(newProducts=> {
                res.json({
                    'status':'success',
                    'messaages':'new product added',
                    'data':newProducts
                })
            })
        }
    // }
)




    // add product with validation
    // app.post('/api/product/add', reqValidation, resValidation)



      
    // const reqValidation = [
    //     check('idproduct').isLength({
    //         min: 5
    //     }),
    //     check('nameProduct').isLength({
    //         min: 5
    //     }),
    //     check('priceProduct').isLength({
    //         min: 3
    //     }),
    //     check('stockProduct').isLength({
    //         min: 1
    //     }),
    //     check('brandProduct').isLength({
    //         min: 5
    //     }),
    //     check('typeProduct').isLength({
    //         min: 5
    //     })
    // ],  resValidation = (req, res)=> {
    //     const errors = validationResult(req)
    //     if(!errors.isEmpty()){
    //         return res.status(422).json({
    //             errors: errors.array()
    //         })
    //     }
    // }

  
}