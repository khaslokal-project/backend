'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define('orderItem', {
    idproduct: DataTypes.BIGINT,
    idcourier: DataTypes.BIGINT,
    total: DataTypes.BIGINT
  }, {});
  orderItem.associate = function(models) {
    // associations can be defined here
  };
  return orderItem;
};