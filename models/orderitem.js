'use strict';
module.exports = (sequelize, DataTypes) => {
  var orderItem = sequelize.define('orderItem', {
    idproduct: DataTypes.INTEGER,
    idorder: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  orderItem.associate = function(models) {
    // associations can be defined here
  };
  return orderItem;
};