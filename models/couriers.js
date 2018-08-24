"use strict";
module.exports = (sequelize, DataTypes) => {
  var courier = sequelize.define(
    "courier",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      price: DataTypes.BIGINT,
      phone: DataTypes.STRING
    },
    {}
  );
  courier.associate = function(models) {
    // associations can be defined here
  };
  return courier;
};
