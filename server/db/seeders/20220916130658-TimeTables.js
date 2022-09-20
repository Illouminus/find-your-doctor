'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Timetables', [{
      '8': false,
      '9': false,
      '10': false,
      '11': false,
      '12': false,
      '13': true,
      '14': false,
      '15':true,
      '16':true,
      '17':false,
      '18':false,
      '19':false,
      doctor_id:5,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        '8': false,
        '9': false,
        '10': false,
        '11': false,
        '12': false,
        '13': true,
        '14': false,
        '15':true,
        '16':true,
        '17':false,
        '18':false,
        '19':false,
        doctor_id:5,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        '8': false,
        '9': false,
        '10': false,
        '11': false,
        '12': false,
        '13': true,
        '14': false,
        '15':true,
        '16':true,
        '17':false,
        '18':false,
        '19':false,
        doctor_id:5,
        date: '2022-09-17 16:18:52.390 +0300',
        createdAt: '2022-09-16 16:18:52.390 +0300',
        updatedAt: new Date(),
      },
      {
        '8': false,
        '9': false,
        '10': false,
        '11': false,
        '12': false,
        '13': true,
        '14': false,
        '15':true,
        '16':true,
        '17':false,
        '18':false,
        '19':false,
        doctor_id:5,
        date: '2022-09-18',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        '8': false,
        '9': false,
        '10': false,
        '11': false,
        '12': false,
        '13': true,
        '14': false,
        '15':true,
        '16':true,
        '17':false,
        '18':false,
        '19':false,
        doctor_id:5,
        date: '2022-09-19',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
