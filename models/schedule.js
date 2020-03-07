/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.User, {
      as: "user",
      foreignKey: {
        allowNull: false
      }
    });
    Schedule.belongsTo(models.User, {
      as: "client",
      foreignKey: {
        allowNull: false
      }
    });
    Schedule.belongsToMany(models.Products, {
      through: models.Delivery,
      as: "schedule"
    });
  };

  return Schedule;
};