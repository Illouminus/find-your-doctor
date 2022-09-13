const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User_token, { foreignKey: 'user_id' });
      this.hasMany(models.Document, { foreignKey: 'user_id' });
      this.hasMany(models.Raiting, { foreignKey: 'user_id' });
      this.hasMany(models.Appointment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    telephone: DataTypes.STRING,
    photo: DataTypes.STRING,
    sex: DataTypes.STRING,
    is_activated: DataTypes.BOOLEAN,
    activation_link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
