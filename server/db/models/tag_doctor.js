'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag_doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag_doctor.init({
    tag_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tag_doctor',
  });
  return Tag_doctor;
};