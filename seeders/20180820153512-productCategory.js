'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const productCategorySeed = [
    {
        id: 1,
        name: 'makanan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'minuman',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        name: 'oleh-oleh',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        name: 'kerajinan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 5,
        name: 'perizinan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 6,
        name: 'jasa',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 7,
        name: 'tiket',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 8,
        name: 'tas',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 9,
        name: 'aksesoris',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 10,
        name: 'buah-buahan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 11,
        name: 'pakaian',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 12,
        name: 'sepatu',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 13,
        name: 'tanaman',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 14,
        name: 'sayuran',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 15,
        name: 'lauk-pauk',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 16,
        name: 'daging',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 17,
        name: 'herbal',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]
  return queryInterface.bulkInsert('productcategories', productCategorySeed)
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('productcategories', null, {});
  }
};
