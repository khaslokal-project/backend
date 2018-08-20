"use strict";
module.exports = (sequelize, DataTypes) => {
  var adminCourier = sequelize.define(
    "adminCourier",
    {
      addressSeller: DataTypes.STRING,
      nameProduct: DataTypes.STRING,
      quantity: DataTypes.STRING,
      priceProduct: DataTypes.STRING,
      totalProductPrice: DataTypes.STRING,
      tariff: DataTypes.STRING,
      grandTotal: DataTypes.INTEGER,
      iduser: DataTypes.STRING,
      addressUser: DataTypes.STRING,
      phone: DataTypes.STRING
    },
    {}
  );
  adminCourier.associate = function(models) {
    // associations can be defined here
  };
  return adminCourier;
};
