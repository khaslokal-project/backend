const { Products, productCategory } = require("../models");

const categoryController = {
  // search
  searchByCategory: (req, res, next) => {
    const idcategory = Number(req.body.idcategory);
    Products.findAll({
      where: { id: idcategory }
    }).then(result => {
      console.log(result);
      if (result) {
        res.status(200).send({
          result
        });
      } else {
        res.status(404).send({
          message: "No products"
        });
      }
    });
  }
};

module.exports = categoryController;
