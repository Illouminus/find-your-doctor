module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [{
      name: 'урология',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'проктология',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'психиатрия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'терапия',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
