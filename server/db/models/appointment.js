const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Appointment.init({
    doctor_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    comments: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
