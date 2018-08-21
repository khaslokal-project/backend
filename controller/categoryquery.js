const { Products } = require("../models");

const categoryController = {
  // search
  searchByCategory: (req, res) => {
    Products.findAll({
      where: {
        idcategory: 1
      }
    }).then(result => {
      console.log(result);
      if (result) {
        res.status(200).send({
          result
        });
      } else {
        res.status(404).send({
          message: "No data"
        });
      }
    });
  }
};

module.exports = categoryController;
