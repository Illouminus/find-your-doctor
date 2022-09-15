'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  Timetable.init({
    doctor_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    8: DataTypes.BOOLEAN,
    9: DataTypes.BOOLEAN,
    10: DataTypes.BOOLEAN,
    11: DataTypes.BOOLEAN,
    12: DataTypes.BOOLEAN,
    13: DataTypes.BOOLEAN,
    14: DataTypes.BOOLEAN,
    15: DataTypes.BOOLEAN,
    16: DataTypes.BOOLEAN,
    17: DataTypes.BOOLEAN,
    18: DataTypes.BOOLEAN,
    19: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Timetable',
  });
  return Timetable;
};