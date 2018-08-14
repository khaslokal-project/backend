const express = require('express')
const bodyParser = require('body-parser')

// tables
const { Products } = require('./dbconfig/sequelize')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// get data from mysql database
app.get('/', (req, res)=> {
    res.send('khaslokal API')
})

app.get('/api/products', (req, res)=> {
    Products.findAll().then(products=> res.json(products))
})

// start API
const port = 3000
app.listen(port, ()=> {
    console.log(`App listen on http://localhost:${port}`)
})











// const express = require ('express')
// const app = express()
// const bodyParser = require('body-parser')

// require ('dotenv').config()

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// })

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// const products = sequelize.define('products', {
//     'idproduct': {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     'nameProduct': Sequelize.STRING,
//     'priceProduct': Sequelize.INTEGER,
//     'stockProduct': Sequelize.INTEGER,
//     'brandProduct': Sequelize.STRING,
//     'descriptionProduct': Sequelize.TEXT,
//     'typeProduct': Sequelize.STRING,
//     'imageProduct': Sequelize.STRING,
//     'ratingProduct': Sequelize.INTEGER,
//     'reviewProduct': Sequelize.TEXT
// }, {
//     freezeTableName: true
// })

// app.get('/',(req, res)=> {
//     res.send('khaslokal API')
// })

// app.get('/api/products', (req, res)=> {
//     products.findAll().then(products=> {
//         res.json(products)
//     })
// })

// // for post validator
// const {
//     check,
//     validationResult
// } = require('express-validator/check')
// // post validation process
// app.post('/api/products', [
//     check('nameProduct').isLength({
//         min: 5
//     }),
//     check('priceProduct').isLength({
//         min: 4
//     }),
//     check('stockProduct').isLength({
//         min: 1
//     }),
//     check('brandProduct').isLength({
//         min: 4
//     }),
//     check('typeProduct').isLength({
//         min: 4
//     })    
// ],(req, res)=> {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(422).json({
//             errors: errors.array()
//         })
//     }

//     products.create({
//         idproduct: req.body.idproduct,
//         nameProduct: req.body.nameProduct,
//         priceProduct: req.body.priceProduct,
//         stockProduct: req.body.stockProduct,
//         brandProduct: req.body.brandProduct,
//         descriptionProduct: req.body.descriptionProduct,
//         typeProduct: req.body.typeProduct,
//         imageProduct: req.body.imageProduct,
//         ratingProduct: req.body.ratingProduct,
//         reviewProduct: req.body.reviewProduct
//     })
//     .then(newProducts=> {
//         res.json({
//             "status": "success",
//             "messages": "product added",
//             "data": newProducts
//         })
//     })
// })

// app.listen(3000, ()=> console.log('App listen port 3000')
// )

