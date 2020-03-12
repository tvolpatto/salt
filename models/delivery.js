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
    zipCode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    time: {
      type:  DataTypes.STRING(10),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
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