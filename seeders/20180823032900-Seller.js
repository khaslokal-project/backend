'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    const SellerSeed = [
      {
        id: 1,
        username: 'otakotak',
        firstname: 'mamaaaaaaa',
        lastname: 'otak otak',
        address: 'Jalan Legenda Malaka',
        password: 'example',
        email: 'ukmkeren@example.com',
        phone: '081234563456',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        username: 'indraputra',
        firstname: 'indra',
        lastname: 'putra',
        address: 'batam',
        password: 'example',
        email: 'indra@example.com',
        phone: '081993732019',
        createdAt: 2018-08-21T06:53:20.000Z,
        updatedAt: 2018-08-21T06:53:20.000Z
    }
  ]
  return queryInterface.bulkInsert('Sellers', SellerSeed) 
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Sellers', null, {});
  }
};
