/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var Delivery = sequelize.define("Delivery", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    }
  });

  Delivery.associate = function(models) {
    Delivery.belongsTo(models.User, {
      as: "user",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Delivery;
};