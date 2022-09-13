module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [{
      user_id: 2,
      doctor_id: 1,
      date_time: new Date(),
      comments: 'seeders folder at "/Users/SoulEdge/Desktop/Elbrus/Phase3/PROJECT/find-your-doctor/server/db/seeders" already exists.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      doctor_id: 2,
      date_time: new Date(),
      comments: 'npx sequelize seed:generate --name Appointment',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appointments', null, {});
  },
};
