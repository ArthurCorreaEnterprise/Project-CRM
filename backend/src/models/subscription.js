"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      Subscription.belongsTo(models.User, { foreignKey: "userId" });
      Subscription.belongsTo(models.Plan, { foreignKey: "planId" });
    }
  }
  Subscription.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};
