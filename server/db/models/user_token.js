const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  User_token.init({
    user_id: DataTypes.INTEGER,
    refresh_token: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User_token',
  });
  return User_token;
};
