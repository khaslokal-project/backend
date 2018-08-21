'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const productCategorySeed = [
    {
        id: 1,
        nameCategory: 'makanan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        nameCategory: 'minuman',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        nameCategory: 'oleh-oleh',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        nameCategory: 'kerajinan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 5,
        nameCategory: 'perizinan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 6,
        nameCategory: 'jasa',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 7,
        nameCategory: 'tiket',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 8,
        nameCategory: 'tas',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 9,
        nameCategory: 'aksesoris',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 10,
        nameCategory: 'buah-buahan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 11,
        nameCategory: 'pakaian',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 12,
        nameCategory: 'sepatu',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 13,
        nameCategory: 'tanaman',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 14,
        nameCategory: 'sayuran',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 15,
        nameCategory: 'lauk-pauk',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 16,
        nameCategory: 'daging',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 17,
        nameCategory: 'herbal',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]
  return queryInterface.bulkInsert('productCategories', productCategorySeed)
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('productCategories', null, {});
  }
};
