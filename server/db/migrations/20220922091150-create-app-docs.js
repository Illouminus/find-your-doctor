module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('App_docs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Documents',
          key: 'id',
        },
      },
      app_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Appointments',
          key: 'id',
        },
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
    await queryInterface.dropTable('App_docs');
  },
};
