'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('adminCouriers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressSeller: {
        type: Sequelize.STRING
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      priceProduct: {
        type: Sequelize.STRING
      },
      totalProductPrice: {
        type: Sequelize.STRING
      },
      tariff: {
        type: Sequelize.STRING
      },
      grandTotal: {
        type: Sequelize.INTEGER
      },
      iduser: {
        type: Sequelize.STRING
      },
      addressUser: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('adminCouriers');
  }
};