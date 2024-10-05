"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      // Definindo associações
      Company.hasMany(models.Main_Activities, {
        foreignKey: "company_id",
        as: "mainActivities",
      });
      Company.hasMany(models.Secondary_Activities, {
        foreignKey: "company_id",
        as: "secondaryActivities",
      });
      Company.hasMany(models.QSA, {
        foreignKey: "company_id",
        as: "qsa",
      });
      Company.hasOne(models.Simples, {
        foreignKey: "company_id",
        as: "simples",
      });
      Company.hasOne(models.Simei, {
        foreignKey: "company_id",
        as: "simei",
      });
    }
  }

  Company.init(
    {
      status: {
        type: DataTypes.STRING,
      },
      ultima_atualizacao: {
        type: DataTypes.DATE,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      tipo: {
        type: DataTypes.STRING,
      },
      porte: {
        type: DataTypes.STRING,
      },
      nome: {
        type: DataTypes.STRING,
      },
      fantasia: {
        type: DataTypes.STRING,
      },
      abertura: {
        type: DataTypes.STRING,
      },
      natureza_juridica: {
        type: DataTypes.STRING,
      },
      logradouro: {
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.STRING,
      },
      complemento: {
        type: DataTypes.STRING,
      },
      cep: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      municipio: {
        type: DataTypes.STRING,
      },
      uf: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      efr: {
        type: DataTypes.STRING,
      },
      situacao: {
        type: DataTypes.STRING,
      },
      data_situacao: {
        type: DataTypes.STRING,
      },
      motivo_situacao: {
        type: DataTypes.STRING,
      },
      situacao_especial: {
        type: DataTypes.STRING,
      },
      data_situacao_especial: {
        type: DataTypes.STRING,
      },
      capital_social: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
