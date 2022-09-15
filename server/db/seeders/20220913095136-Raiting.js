module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Raitings', [{
      doctor_id: 1,
      user_id: 2,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      user_id: 8,
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      user_id: 3,
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      user_id: 9,
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 4,
      user_id: 5,
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 5,
      user_id: 2,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 5,
      user_id: 4,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 5,
      user_id: 8,
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 7,
      user_id: 4,
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 8,
      user_id: 8,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 9,
      user_id: 6,
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 10,
      user_id: 2,
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Raitings', null, {});
  },
};
