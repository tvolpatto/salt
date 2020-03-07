/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    }
  });

  Products.associate = function(models) {
    Products.belongsToMany(models.Schedule, {
      through: models.Delivery,
      as: "product"
    });
  };

  return Products;
};