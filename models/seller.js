'use strict';
module.exports = (sequelize, DataTypes) => {
  var seller = sequelize.define('seller', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  seller.associate = function(models) {
    // associations can be defined here
  };
  return seller;
};