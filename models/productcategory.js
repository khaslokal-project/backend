'use strict';
module.exports = (sequelize, DataTypes) => {
  var productcategory = sequelize.define('productcategory', {
    name: DataTypes.STRING
  }, {});
  productcategory.associate = function(models) {
    // associations can be defined here
  };
  return productcategory;
};