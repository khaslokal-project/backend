const db = require('../models')
const sequelize = require('sequelize')
// const seq = require('./../')

const viewOrderController = {

    get: (req, res, next) => {

        db.sequelize.query("SELECT * FROM ukmkita.view_order;",
        { type: sequelize.QueryTypes.SELECT})
            .then(view_order => {
                res.json(view_order)
            })
    }
}

module.exports = viewOrderController