const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Doctor_token, { foreignKey: 'doctor_id' });
      this.belongsToMany(models.Tag, {
        through: models.Tag_doctor,
        foreignKey: 'doctor_id',
        otherKey: 'tag_id',
      });
      this.hasMany(models.Raiting, { foreignKey: 'doctor_id' });
      this.hasMany(models.Appointment, { foreignKey: 'doctor_id' });
    }
  }
  Doctor.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    telephone: DataTypes.STRING,
    experience: DataTypes.TEXT,
    education: DataTypes.TEXT,
    speciality: DataTypes.STRING,
    photo: DataTypes.STRING,
    sex: DataTypes.STRING,
    adress: DataTypes.STRING,
    is_activated: DataTypes.BOOLEAN,
    activation_link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};
