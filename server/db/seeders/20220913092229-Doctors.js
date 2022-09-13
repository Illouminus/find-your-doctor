module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      email: 'doctorhuy@vortu.com',
      password: 'qwerty',
      first_name: 'Boris',
      last_name: 'Drochis',
      patronymic: 'Petrovich',
      telephone: '89999999999',
      experience: 'This method is not a part of Sequelize lifecycle.',
      education: 'The `models/index` file will call this method automatically.',
      speciality: 'Urology',
      photo: 'http://huyvortu.com/photos3',
      sex: 'male',
      adress: 'moscow',
      is_activated: true,
      activation_link: 'cewcewcw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'doctorhuy@vortu.com',
      password: 'qwerty',
      first_name: 'Katya',
      last_name: 'Brusnikina',
      patronymic: '',
      telephone: '81111111111',
      experience: 'This method is not a part of Sequelize lifecycle.',
      education: 'The `models/index` file will call this method automatically.',
      speciality: 'Proctology',
      photo: 'http://huyvortu.com/photos4',
      sex: 'female',
      adress: 'Omsk',
      is_activated: true,
      activation_link: 'cewverwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], { });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
