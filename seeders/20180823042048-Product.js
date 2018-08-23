'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ProductSeed = [
      {
        id: 1,
        idseller: 1,
        idcategory: 1,
        name: 'otak-otakeee',
        price: 15000,
        brand: 'mama otak-otak',
        description: 'otak-otak dari ikan laut segar',
        image: 'https://cdn.sribu.com/assets/media/contest_detail/2016/2/kontes-desain-label-keripik-singkong-aruna-56b45f3bca6bcb4a00000002/f7dd864d1c.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        idseller: 2,
        idcategory: 2,
        name: 'teh tarik',
        price: 10000,
        brand: 'meltea batam',
        description: 'rasa original 200ml',
        image: 'meltea.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        idseller: 1,
        idcategory: 1,
        name: 'kripik pisang',
        price: 20000,
        brand: 'narata',
        description: 'krispi',
        image: 'kripik pisang.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        idseller: 3,
        idcategory: 1,
        name: 'bronis coklat',
        price: 35000,
        brand: 'wecake',
        description: 'bolu lembut',
        image: 'brownis.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 5,
        idseller: 4,
        idcategory: 4,
        name: 'kotak tisu',
        price: 50000,
        brand: 'kerajinan Batam',
        description: 'kotak tisu hias gonggong',
        image: 'kotaktissue.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 6,
        idseller: 3,
        idcategory: 2,
        name: 'teh tarik',
        price: 10000,
        brand: 'meltea batam',
        description: 'teh original',
        image: 'tehtarik.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ]
    return queryInterface.bulkInsert('Products', ProductSeed)
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});
  }
};
