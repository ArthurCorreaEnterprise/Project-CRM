"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Simples extends Model {
    static associate(models) {
      Simples.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company",
      });
    }
  }

  Simples.init(
    {
      optante: {
        type: DataTypes.BOOLEAN,
      },
      data_opcao: {
        type: DataTypes.DATE,
      },
      data_exclusao: {
        type: DataTypes.DATE,
      },
      ultima_atualizacao: {
        type: DataTypes.DATE,
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
      modelName: "Simples",
    }
  );
  return Simples;
};
