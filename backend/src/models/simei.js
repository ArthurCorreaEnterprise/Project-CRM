"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Simei extends Model {
    static associate(models) {
      Simei.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company",
      });
    }
  }

  Simei.init(
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
      modelName: "Simei",
      tableName: "Simei", // Adicionado para especificar o nome da tabela
    }
  );
  return Simei;
};
