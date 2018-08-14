// bootstrap our ORM and define relationship

const Sequelize = require('sequelize')
const ProductsModels = require('../models/products')

require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 1000
        }
    })

const Products = ProductsModels(sequelize, Sequelize)

module.exports = {
    Products
}