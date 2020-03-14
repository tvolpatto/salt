/* eslint-disable linebreak-style */
var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email:{
      type: DataTypes.STRING(80),
      unique: true
    },
    password: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING(20),
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

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};