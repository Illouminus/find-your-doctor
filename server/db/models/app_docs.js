const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class App_docs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Appointment, { foreignKey: 'app_id' });
      this.belongsTo(models.Document, { foreignKey: 'doc_id' });
    }
  }
  App_docs.init({
    doc_id: DataTypes.INTEGER,
    app_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'App_docs',
  });
  return App_docs;
};
