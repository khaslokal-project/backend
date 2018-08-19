'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courier = sequelize.define('Courier', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Courier.associate = function(models) {
    // associations can be defined here
  };
  return Courier;
};