'use strict';
module.exports = (sequelize, DataTypes) => {
  var Seller = sequelize.define('Seller', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Seller.associate = function(models) {
    // associations can be defined here
  };
  return Seller;
};