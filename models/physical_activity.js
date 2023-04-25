'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Physical_Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Physical_Activity.init({
    Cycling: DataTypes.INTEGER,
    Jogging: DataTypes.INTEGER,
    Pushups: DataTypes.INTEGER,
    Running: DataTypes.INTEGER,
    Situps: DataTypes.INTEGER,
    Squats: DataTypes.INTEGER,
    Swinning: DataTypes.INTEGER,
    Walking: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Physical_Activity',
  });
  return Physical_Activity;
};