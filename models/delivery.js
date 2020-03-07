/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var Delivery = sequelize.define("Delivery", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Delivery;
};