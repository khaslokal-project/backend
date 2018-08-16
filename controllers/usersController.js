const db = require('../dbconfig/sequelize')
const users = db.users

module.exports = (app)=> {

    // get home
    app.get('/', (req, res)=> {
        res.send('khaslokal API')
    })

    // get all data from users table
    app.get('/api/users', (req, res)=> {
        users.findAll().then(users=> {
            res.json(users)
        })
    })

    const {
        check,
        validationResult
    } = require('express-validator/check')
    
    // post data to user with validation
    app.post('/api/user/add',
    [
        check('firstnameUser').isLength({
            min: 3
        }),
        check('lastnameUser').isLength({
            min: 3
        }),
        check('emailUser').isEmail(),
        check('addressUser').isLength({
            min: 20
        }),
        check('phoneUser').isEmail({
            min: 10
        })
    ], (req, res)=> {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array()
            })
        }
        users.create({
            iduser: req.body.iduser,
            firstnameUser: req.body.firstnameUser,
            lastnameUser: req.body.lastnameUser,
            emailUser: req.body.emailUser,
            addressUser: req.body.addressUser,
            phoneUser: req.body.phoneUser
        })
        .then(newUsers=> {
            res.json({
                'status':'success',
                'message': 'user added',
                'data': newUsers
            })
        })
    })

    // edit data identified by iduser
    app.put('/api/users/edit', (req, res)=> {
        const update = {
            iduser: req.body.iduser,
            firstnameUser: req.body.firstnameUser,
            lastnameUser: req.body.lastnameUser,
            emailUser: req.body.emailUser,
            addressUser: req.body.addressUser,
            phoneUser: req.body.phoneUser
        }
        users.update(update, {
            where: {
                iduser: req.body.iduser
            }
        })
        .then(affectedRow=> {
            return users.findOne({
                iduser: req.body.iduser
            }, {
                returning: true,
                where: {}
            })
        })
        .then(DataRes=> {
            res.json({
                'status':'success',
                'message':'user updated',
                'data': DataRes
            })
        })
    })
    
    // delete data identified by iduser
    app.delete('/api/user/delete/:iduser', (req, res)=> {
        user.destroy({
            where: {
                iduser: req.params.iduser
            }
        })
        .then(affectedRow=> {
            if(affectedRow){
                return {
                    'status':'success',
                    'message':'user deleted',
                    'data':null
                }
            }
            return {
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