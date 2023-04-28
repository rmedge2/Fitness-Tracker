'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(models.Physical_Activity, {
      //   through: 'UserPhysicalActivity',
      //   foreignKey: 'userId'
      // });
      // User.belongsToMany(models.Nutrition_log, {
      //   through: 'UserNutritionLog',
      //   foreignKey: 'userId'
      // });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};