'use strict';
module.exports = (sequelize, DataTypes) => {
  var productCategory = sequelize.define('productCategory', {
    name: DataTypes.STRING
  }, {});
  productCategory.associate = function(models) {
    // associations can be defined here
  };
  return productCategory;
};