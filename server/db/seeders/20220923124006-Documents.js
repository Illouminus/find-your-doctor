module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Documents', [{
      user_id: 3,
      link: 'document1.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      link: 'image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      link: 'qwerty.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      link: 'skan.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      link: 'skan.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      link: 'skan2.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      link: 'skans.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      link: 'spravka.pdf',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Documents', null, {});
  },
};
