const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.App_docs, { foreignKey: 'doc_id' });
    }
  }
  Document.init({
    user_id: DataTypes.INTEGER,
    link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};
