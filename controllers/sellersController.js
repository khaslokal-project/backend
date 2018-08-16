const db = require('../dbconfig/sequelize')
const sellers = db.sellers

module.exports = (app)=> {

    // get home
    app.get('/', (req, res)=> {
        res.send('khaslokal API')
    })

    // get all seller
    app.get('/api/sellers', (req, res)=> {
        sellers.findAll().then(sellers=> {
            res.json(sellers)
        })
    })

    // post data to product with validation
    const {
        check,
        validationResult
    } = require('express-validator/check')

    app.post('/api/sellers/add', 
    [
        check('firstnameSeller').isLength({
            min: 3
        }),
        check('lastnameSeller').isLength({
            min: 3
        }),
        check('emailSeller').isEmail(),
        check('addressSeller').isLength({
            min: 20
        }),
        check('phoneSeller').isLength({
            min: 10
        })
    ], (req, res)=> {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array()
            })
        }
        sellers.create({
            idseller: req.body.idseller,
            firstnameSeller: req.body.firstnameSeller,
            lastnameSeller: req.body.lastnameSeller,
            emailSeller: req.body.emailSeller,
            addressSeller: req.body.addressSeller,
            phoneSeller: req.body.phoneSeller
        })
        .then(newSellers=> {
            res.json({
                'status':'success',
                'message':'seller added',
                'data': newSellers
            })
        })
    })

    // edit data identified by idseller
    app.put('/api/sellers/edit', (req, res)=> {
        const update = {
            idseller: req.body.idseller,
            firstnameSeller: req.body.firstnameSeller,
            lastnameSeller: req.body.lastnameSeller,
            emailSeller: req.body.emailSeller,
            addressSeller: req.body.addressSeller,
            phoneSeller: req.body.phoneSeller
        }
        sellers.update(update, {
            where: {
                idseller: req.body.idseller
            }
        })
        .then(affectedRow=> {
            return sellers.findOne({
                idseller: req.body.idseller
            }, {
                returning: true,
                where: {}
            })
        })
        .then(DataRes=> {
            res.json({
                'status':'success',
                'message':'seller updated',
                'data': DataRes
            })
        })
    })

    // delete data identified by idseller
    app.delete('/api/sellers/delete/:idseller', (req, res)=> {
        sellers.destroy({
            where:{
                idseller: req.params.idseller
            }
        })
        .then(affectedRow=> {
            if(affectedRow){
                return{
                    'status':'succes',
                    'message':'seller deleted',
                    'data':null
                }
            }
            return{
                'status':'error',
                'message':'failed',
                'data':null
            }
        })
        .then(deleteData=> {
            res.json(deleteData)
        })
    })
}