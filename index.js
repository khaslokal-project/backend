const express = require('express')
const bodyParser = require('body-parser')

const ProductController = require('./controllers/productController')
const UserController = require('./controllers/usersController')
const SellerController = require('./controllers/sellersController')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


ProductController(app)
UserController(app)
SellerController(app)


// start API
const port = 3000
app.listen(port, ()=> {
    console.log(`App listen on http://localhost:${port}`)
})