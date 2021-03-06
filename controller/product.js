const jwt = require("jsonwebtoken");

const { product } = require("../models");

const productController = {


  // add product after Admin validated
  add: (req, res) => {
    return product.create({
      idseller: req.body.idseller,
      idcategory: req.body.idcategory,
      name: req.body.name,
      price: req.body.price,
      brand: req.body.brand,
      description: req.body.description,
      image: req.body.image
    })
      .then(newProduct => {
        res.json({
          status: "success",
          message: "Product added",
          data: newProduct
        });
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // get all product data
  get: (req, res, next) => {
    product.findAll()
      .then(product => {
        res.json(product);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // edit product
  update: (req, res, next) => {
    const id = Number(req.params.id);
    if (req.body.name) {
      product.update(
        {
          idseller: req.body.idseller,
          idcategory: req.body.idcategory,
          name: req.body.name,
          price: req.body.price,
          brand: req.body.brand,
          description: req.body.description,
          image: req.body.image,
          updatedAt: new Date()
        },
        {
          where: { id: id }
        }
      ).then(() => {
        res.status(200).send({
          message: "Product updated"
        });
      });
    } else {
      res.status(416).send({
        message: "Please specify password and email!"
      });
    }
  },

  // remove product
  remove: (req, res, next) => {
    const id = Number(req.params.id);
    product.destroy({
      where: { id: id }
    })
      .then(
        res.status(200).send({
          message: "Product removed"
        })
      )
      .catch(error => {
        res.status(500).send({
          message: error
        });
      });
  },

  // get data by id
  getbyid: (req, res, next) => {
    const id = Number(req.params.id);
    product.findById(id)
      .then(product => {
        if (product) {
          res.send(product);
        } else {
          res.send({ message: "Product not found" });
        }
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // get data base on keyword
  searchByKeyword: (req, res, next) => {
    const value = req.params.name;
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    product.findAll({
      where: {
        name: {
          [Op.like]: `%${value}%`
        }
      }
    }).then(result => {
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
  },

  // sort by category
  searchByCategory: (req, res) => {
    const idcategory = req.params.idcategory;
    product.findAll({
      where: {
        idcategory: idcategory
      }
    }).then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({
          message: "No data"
        });
      }
    });
  }
};

module.exports = productController;
