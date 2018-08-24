"use strict";
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define("product", {
      idseller: DataTypes.INTEGER,
      idcategory: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      brand: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
  },{});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};
