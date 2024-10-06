"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {
      // Defina suas associações aqui, se necessário
      Plan.hasMany(models.Subscription, { foreignKey: "planId" });
    }
  }
  Plan.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2), // Ajuste conforme necessário
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
