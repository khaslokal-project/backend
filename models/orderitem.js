'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderitem = sequelize.define('orderitem', {
    idproduct: DataTypes.INTEGER,
    idorder: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  orderitem.associate = function(models) {
    // associations can be defined here
  };
  return orderitem;
};