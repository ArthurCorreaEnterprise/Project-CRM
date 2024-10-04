"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Secondary_Activities extends Model {
    static associate(models) {
      Secondary_Activities.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company",
      });
    }
  }

  Secondary_Activities.init(
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
      modelName: "Secondary_Activities",
    }
  );
  return Secondary_Activities;
};
