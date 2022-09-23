module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tag_doctors', [{
      tag_id: 1,
      doctor_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 1,
      doctor_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 1,
      doctor_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 1,
      doctor_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 2,
      doctor_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 2,
      doctor_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 4,
      doctor_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 4,
      doctor_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 4,
      doctor_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tag_id: 3,
      doctor_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tag_doctors', null, {});
  },
};
