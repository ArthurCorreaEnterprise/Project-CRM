"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Main_Activities extends Model {
    static associate(models) {
      Main_Activities.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company",
      });
    }
  }

  Main_Activities.init(
    {
      code: {
        type: DataTypes.STRING,
      },
      text: {
        type: DataTypes.STRING,
      },
      company_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Companies",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Main_Activities",
    }
  );
  return Main_Activities;
};
