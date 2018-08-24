const jwt = require('jsonwebtoken')

const controller = {

    get: (req, res, next) => {
        res.status(200).send({
            message: `Token is valid, Thank you`
        })
    },

    checkToken: (req, res, next) => {
        const withToken =
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer'
    
        if (withToken) {
            const token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.decoded = decoded
            next()
        } else {
            res.status(400).send({
                message: `Token is not found in request headers`
            })
        }
    }
}

module.exports = controller