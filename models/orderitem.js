'use strict';
module.exports = (sequelize, DataTypes) => {
  var orderItem = sequelize.define('orderItem', {
    idproduct: DataTypes.INTEGER,
    idcourier: DataTypes.INTEGER,
    total: DataTypes.BIGINT
  }, {});
  orderItem.associate = function(models) {
    // associations can be defined here
  };
  return orderItem;
};