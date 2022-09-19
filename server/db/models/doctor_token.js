const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Doctor_token.init({
    doctor_id: DataTypes.INTEGER,
    refresh_token: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Doctor_token',
  });
  return Doctor_token;
};
