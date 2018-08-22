"use strict";
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define(
    "Orders",
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
