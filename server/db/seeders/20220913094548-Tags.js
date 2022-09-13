module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [{
      name: 'urology',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'proctology',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'psychology',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'huyology',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
