module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patronymic: {
        type: Sequelize.STRING,
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      experience: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      education: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      speciality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      adress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_activated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      activation_link: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Doctors');
  },
};
