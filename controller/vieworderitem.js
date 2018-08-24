const db = require('../models')
const sequelize = require('sequelize')
// const seq = require('./../')

const viewOrderItemController = {

    get: (req, res, next) => {

        db.sequelize.query("SELECT * FROM ukmkita.view_orderitem;",
        { type: sequelize.QueryTypes.SELECT})
            .then(view_orderitem => {
                res.json(view_orderitem)
            })
    }
}

module.exports = viewOrderItemController