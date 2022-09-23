module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('App_docs', [{
      doc_id: 1,
      app_id: 38,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 2,
      app_id: 37,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 3,
      app_id: 36,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 4,
      app_id: 43,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 5,
      app_id: 41,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 6,
      app_id: 42,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 7,
      app_id: 37,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doc_id: 8,
      app_id: 36,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('App_docs', null, {});
  },
};
