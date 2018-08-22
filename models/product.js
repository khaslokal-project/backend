"use strict";
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  var Product = sequelize.define(
    "Product",
    {
      idseller: DataTypes.INTEGER,
      idcategory: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      brand: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
=======
  var Product = sequelize.define('Product', {
    idseller: DataTypes.INTEGER,
    idcategory: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
>>>>>>> 99094319016f568b1f04582f46951597a52a363d
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
