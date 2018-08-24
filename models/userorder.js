"use strict";
module.exports = (sequelize, DataTypes) => {
  var Userorder = sequelize.define(
    "userOrder",
    {
      name: DataTypes.STRING,
      item: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      shipping_cost: DataTypes.INTEGER
    },
    {}
  );
  Userorder.associate = function(models) {
    // associations can be defined here
  };
  return Userorder;
};
