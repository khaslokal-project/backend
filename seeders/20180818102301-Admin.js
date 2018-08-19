'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const adminSeed = [
    {
      username: 'indraakkk',
      firstname: 'indra',
      lastname: 'putra',
      password: 'example',
      email: 'indra@example.com',
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ]
  return queryInterface.bulkInsert('Admins', adminSeed)
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Admins', null, {})
  }
};
