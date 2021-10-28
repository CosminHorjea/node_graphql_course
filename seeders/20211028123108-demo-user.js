'use strict';
const { fake } = require('faker');
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [];
    for(let i = 0;i<100;i++) {
      data.push({
        id:i,
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('users',data,{});
  },

  down: async(queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   await queryInterface.bulkDelete('Users',null,{})
  }
};
