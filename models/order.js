'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    idproduct: DataTypes.INTEGER,
    iduser: DataTypes.INTEGER,
    idcourier: DataTypes.INTEGER,
    idseller: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};