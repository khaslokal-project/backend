const { Products, productCategory } = require("../models");
// const sequelize = require("sequelize");

const categoryController = {
  search: (req, res, next)=> {
    sequelize.query('SELECT * FROM productCategories', {
      model: productCategory})
      .then(productCategory=> {
          res.status(200).send(productCategory)
        })
        .catch(error=> {
          res.status(500).send(error)
        })
  }
};

module.exports = categoryController;



  // search
  // searchByCategory: (req, res, next) => {
  //   Sequelize.query(
  //     'SELECT `Products.name`, `productCategories.nameCategory` FROM `Products`, `productCategories` WHERE `Products.idcategory` = `productCategories.id` AND `productCategories.id`=1'
  //   ).then(result => {
  //     console.log(result);
  //     if (result) {
  //       res.status(200).send({
  //         result
  //       });
  //     } else {
  //       res.status(404).send({
  //         message: "Data not found"
  //       });
  //     }
  //   });
  // }