"use strict";
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define(
    "Order",
    {
      iduser: DataTypes.INTEGER,
      idorderitem: DataTypes.INTEGER,
      idcourier: DataTypes.INTEGER
    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
