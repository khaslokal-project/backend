'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    idseller: DataTypes.INTEGER,
    idcategory: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};