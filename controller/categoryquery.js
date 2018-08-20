const { Products, productCategory } = require("../models");
const Sequelize = require("sequelize");

const categoryController = {
  // search
  searchByCategory: (req, res, next) => {
    Sequelize.query(
      "select Products.name, productCategories.nameCategory from Products, productCategories where Products.idcategory = productCategories.id and productCategories.id =1"
    ).then(result => {
      console.log(result);
      if (result) {
        res.status(200).send({
          result
        });
      } else {
        res.status(404).send({
          message: "Data not found"
        });
      }
    });
  }
};

module.exports = categoryController;
