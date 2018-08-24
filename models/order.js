"use strict";
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    iduser: DataTypes.INTEGER,
    idcourier: DataTypes.INTEGER,
    status: DataTypes.ENUM('0', '1', '2')
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};
