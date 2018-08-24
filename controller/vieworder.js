const { db } = require('../models')

const viewOrderController = {

    get: (req, res, next) => {
        return db.sequelize.query("SELECT * FROM `ukmkita.view_order`", {
                type: db.sequelize.QueryTypes.SELECT 
            })
            .then(vieworder => {
                res.json(vieworder)
                // We don't need spread here, since only the results will be returned for select queries
            })
    }
}

module.exports = viewOrderController