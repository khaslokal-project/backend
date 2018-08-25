const db = require('../models')
const sequelize = require('sequelize')
// const seq = require('./../')

const viewOrderItemController = {

    // view order item
    get: (req, res, next) => {

        db.sequelize.query("SELECT * FROM ukmkita.view_ordercomplete",
        { type: sequelize.QueryTypes.SELECT})
            .then(view_orderitem => {
                res.json(view_orderitem)
            })
    },

    getbyid: (req, res, next) => {
        const id = Number(req.params.id)
        db.sequelize.query('SELECT * FROM ukmkita.view_ordercomplete WHERE idorder = ?', {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT
        }).then(projects => {
            res.json(projects)
        })
    }
}

module.exports = viewOrderItemController