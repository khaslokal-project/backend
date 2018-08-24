"use strict";
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    iduser: DataTypes.INTEGER,
    idcourier: DataTypes.INTEGER,
    status: DataTypes.ENUM('0', '1', '2')
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
