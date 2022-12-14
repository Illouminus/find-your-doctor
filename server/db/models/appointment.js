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
      this.hasMany(models.App_docs, { foreignKey: 'app_id' });
    }
  }
  Appointment.init({
    doctor_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    comments_patient: DataTypes.TEXT,
    comments_doctor: DataTypes.TEXT,
    first_time: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
