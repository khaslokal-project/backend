const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Seller } = require('../models')

const sellerController = {

    // get all Seller list
    get: (req, res, next)=> {
        Seller.findAll().then(seller=> {
            res.status(200).send(seller)
        }).catch(error=> {
            res.status(500).send(error)
        })
    },

    // register new seller
    register: (req, res, next)=> {
        const{
            username,
            firstname,
            lastname,
            address,
            password,
            email,
            phone
        } = req.body
        if(username && password && email){
            const saltRounds = 5
            bcrypt.hash(password, saltRounds)
            .then(hash=> {
                console.log('HASH', hash)
                return{
                    username,
                    firstname,
                    lastname,
                    address,
                    password: hash,
                    email,
                    phone
                }
            })
            .then(newSeller=> {
                Seller.build(newSeller).save()
                .then(seller=> {
                    res.status(200).send({
                        message: 'Seller Created',
                        seller: {
                            id: seller.id,
                            username: seller.username,
                            firstname: seller.username,
                            lastname: seller.lastname,
                            address: seller.address,
                            password: seller.password,
                            email:seller.email,
                            phone: seller.phone
                        }
                    })
                }).catch(err=> {
                    res.status(500).send({
                        message: err
                    })
                })
            })
        } else {res.status(400).send({
            message: 'Please fill up correctly'
                })
            }
    },

    // update Seller
    update: (req, res, next)=> {
        const id = Number(req.params.id)
        if(req.body.password && req.body.email){
            Seller.update({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                updatedAt: new Date()
            },{
                where: {
                    id:id
                }
            })
        .then(()=> {
            res.status(200).send({
                message: 'Seller updated'
            })
        })
        } else {
            res.status(416).send({
                message: 'Please specify password and email!'
            })
        }
    },

    // remove Seller
    remove: (req, res, next)=> {
        const id = Number(req.params.id)
        Seller.destroy({
            where: { id: id }
        })
        .then(res.status(200).send({
            message: "Seller removed"
        }))
    },

    // search seller by id
    search: (req, res, next)=> {
        const id = Number(req.params.id)
        Seller.findById(id).then(seller=> {
            if(seller){
                res.send(seller)
            } else {
                res.send({ message: 'Seller not found' })
            }
        })
        .catch(error=> {
            res.status(400).send(error)
        })
    },

    login: (req, res)=> {
        const{
            username,
            password,
        } = req.body
        if(username && password){
            Seller.findOne({where:{username}})
            .then(seller=> {
                const token = jwt.sign({
                    iat: Math.floor(Date.now() / 1000) - 30,
                    data: {
                        id: seller.id,
                        username:seller.username,
                        email: seller.email
                    }
                }, process.env.JWT_SECRET, {
                    expiresIn: '1d'
                })
                bcrypt.compare(password, seller.password)
                .then(response=> {
                    if(response){
                        res.status(200).send({
                            message: 'Thanks for logged in',
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
                message: 'Check your password'
            })
        }
    },

    // log out
    logout: (req, res, next)=> {
        res.status(200).send({ message: "see ya" })
    }
}

module.exports = sellerController

// firstname
// lastname
// address
// password
// email
// phone