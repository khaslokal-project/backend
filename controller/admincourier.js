const { Admincourier } = require("../models")

const admincourierController = {

  get: (req, res)=> {
    return Admincourier.findAll().then(admincourier=> {
      res.json(admincourier)
    })
    .catch(error=> {
      res.status(400).send(error)
    })
  },

  add: (req, res) => {
    return Admincourier.create({
      addressseller: req.body.addressseller,
      nameproduct: req.body.nameproduct,
      quantity: req.body.quantity,
      priceproduct: req.body.priceproduct,
      totalproductprice: req.body.totalproductprice,
      tariff: req.body.tariff,
      grandtotal: req.body.grandtotal,
      iduser: req.body.iduser,
      addressuser: req.body.addressuser,
      phone: req.body.phone
    })
      .then(newAdminCourier => {
        res.json({
          status: "success",
          message: "admincourier added",
          data: newAdminCourier
        })
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  // edit admin curier data
  update: (req, res, next)=> {
    const id = Number(req.params.id)
    if(req.body.addressseller){
      Admincourier.update({
        addressseller: req.body.addressseller,
        nameproduct: req.body.nameproduct,
        quantity: req.body.quantity,
        priceproduct: req.body.priceproduct,
        totalproductprice: req.body.totalproductprice,
        tariff: req.body.tariff,
        grandtotal: req.body.grandtotal,
        iduser: req.body.iduser,
        addressuser: req.body.addressuser,
        phone: req.body.phone,
        updatedAt: new Date()
      }, {
        where: { id: id }
      })
      .then(()=> {
        res.status(200).send({
          message: 'Admin Courier updated'
        })
      })
    } else {
      res.status(416).send({
        message: 'Please specify password and email!'
      })
    }
  }

}

module.exports = admincourierController
