"use strict";
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define("Product", {
      idseller: DataTypes.INTEGER,
      idcategory: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      brand: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
  },{});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
