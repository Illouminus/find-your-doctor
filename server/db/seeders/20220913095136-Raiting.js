module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Raitings', [{
      doctor_id: 1,
      user_id: 3,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      user_id: 2,
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      user_id: 2,
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Raitings', null, {});
  },
};
