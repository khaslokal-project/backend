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

    app.post('/api/products/add', 
    [
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
    ], (req, res)=> {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array()
            })
        }
        console.log(req.body);
            products.create({
                idproduct: req.body.idproduct,
                nameProduct: req.body.nameProduct,
                priceProduct: req.body.priceProduct,
                stockProduct: req.body.stockProduct,
                brandProduct: req.body.brandProduct,
                descriptionProduct: req.body.descriptionProduct,
                typeProduct: req.body.typeProduct,
                imageProduct: req.body.imageProduct,
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
        })

        // edit data identified by idproduct
        app.put('/api/products/edit', (req, res)=> {
            const update = {
                idproduct: req.body.idproduct,
                nameProduct: req.body.nameProduct,
                priceProduct: req.body.priceProduct,
                stockProduct: req.body.stockProduct,
                brandProduct: req.body.brandProduct,
                descriptionProduct: req.body.descriptionProduct,
                typeProduct: req.body.typeProduct,
                imageProduct: req.body.imageProduct,
                ratingProduct: req.body.ratingProduct,
                reviewProduct: req.body.reviewProduct
            }
            products.update(update, {
                where: {
                    idproduct: req.body.idproduct
                }
            })
            .then(affectedRow=> {
                return products.findOne({
                    idproduct: req.body.idproduct
                }, {
                    returning: true,
                    where: {}
                })
            })
            .then(DataRes=> {
                res.json({
                    'status':'success',
                    'message':'product updated',
                    'data': DataRes
                })
            })
        })

        // delete data identified by idproduct
        app.delete('/api/products/delete/:idproduct', (req, res)=> {
            products.destroy({
                where: {
                    idproduct: req.params.idproduct
                }
            })
            .then(affectedRow=> {
                if(affectedRow){
                    return {
                        'status':'success',
                        'messages':'product deleted',
                        'data':null
                    }
                }
                return {
                    'status':'error',
                    'messages':'failed',
                    'data':null
                }
            })
            .then(deleteData=> {
                res.json(deleteData)
            })
        })
}