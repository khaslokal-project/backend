const { Admincourier } = require("../models");

const admincourierController = {
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
        });
      })
      .catch(error => {
        res.status(400).send(error);
      });
  }
};

module.exports = admincourierController;
