module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id',
        },
      },
      date: {
        type: Sequelize.DATE,
      },
      8: {
        type: Sequelize.BOOLEAN,
      },
      9: {
        type: Sequelize.BOOLEAN,
      },
      10: {
        type: Sequelize.BOOLEAN,
      },
      11: {
        type: Sequelize.BOOLEAN,
      },
      12: {
        type: Sequelize.BOOLEAN,
      },
      13: {
        type: Sequelize.BOOLEAN,
      },
      14: {
        type: Sequelize.BOOLEAN,
      },
      15: {
        type: Sequelize.BOOLEAN,
      },
      16: {
        type: Sequelize.BOOLEAN,
      },
      17: {
        type: Sequelize.BOOLEAN,
      },
      18: {
        type: Sequelize.BOOLEAN,
      },
      19: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Timetables');
  },
};
