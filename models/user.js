/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    business: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};