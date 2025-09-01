'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    wishlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    infoUrl: DataTypes.STRING,
    price: DataTypes.FLOAT,
    purchased: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Item',
    updatedAt: false
  });
  return Item;
};