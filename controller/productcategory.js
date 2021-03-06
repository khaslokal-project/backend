const { productcategory } = require("../models");

const productCategoryController = {
  // get all category list
  get: (req, res, next) => {
    productcategory
      .findAll()
      .then(category => {
        res.send(category);
      })
      .catch(error => {
        res.status(400).send({ error });
      });
  },

  //   get one data by id
  getOneById: (req, res, next) => {
    const id = Number(req.params.id);
    productcategory
      .findById(id)
      .then(category => {
        if (category) {
          res.send(category);
        } else {
          res.send({
            message: "Category not found"
          });
        }
      })
      .catch(error => {
        res.status(400).send({
          error
        });
      });
  },

  // add new category data
  create: (req, res, next) => {
    productcategory
      .create(req.body)
      .then(category => {
        res.send(category);
      })
      .catch(error => {
        res.status(400).send({ error });
      });
  },

  // update category
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.name) {
      productcategory
        .update(
          {
            name: req.body.name,
            updatedAt: new Date()
          },
          {
            where: { id: id }
          }
        )
        .then(() => {
          res.status(200).send({
            message: "Category updated"
          });
        });
    } else {
      res.status(416).send({
        message: "update failed!"
      });
    }
  },

  // remove category
  remove: (req, res, next) => {
    const id = Number(req.params.id);
    productcategory
      .destroy({
        where: { id: id }
      })
      .then(
        res.status(200).send({
          message: "Category deleted"
        })
      );
  }
};

module.exports = productCategoryController;
