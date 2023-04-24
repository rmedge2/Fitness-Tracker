'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutrition_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nutrition_log.init({
    Water_oz: DataTypes.STRING,
    Food: DataTypes.STRING,
    Calories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nutrition_log',
  });
  return Nutrition_log;
};