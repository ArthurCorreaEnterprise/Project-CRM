"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QSA extends Model {
    static associate(models) {
      QSA.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company",
      });
    }
  }

  QSA.init(
    {
      nome: {
        type: DataTypes.STRING,
      },
      qual: {
        type: DataTypes.STRING,
      },
      pais_origem: {
        type: DataTypes.STRING,
      },
      nome_rep_legal: {
        type: DataTypes.STRING,
      },
      qual_rep_legal: {
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
      modelName: "QSA",
      tableName: "QSA", // Adicionado para especificar o nome da tabela
    }
  );
  return QSA;
};
